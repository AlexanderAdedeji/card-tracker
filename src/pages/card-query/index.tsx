import cardService from '@/adapters/card';
import Button from '@/components/Button';
import Icon from '@/lib/icon';
import { ROUTES } from '@/routes/routes.types';
import { cn } from '@nextui-org/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { getMaskedContactDetailsInterface, searchCardApiInterface } from '@/types/api.types';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { RadioGroup, Radio } from '@nextui-org/react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputErrorWrapper from '@/components/hocs/InputErrorWrapper';

const verifyOtpFormSchema = z.object({
  code: z.string().min(2, `Pls enter a valid OTP`),
});

type verifyOtpFormSchemaInterface = z.infer<typeof verifyOtpFormSchema>;

const CardQuery = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [searchParams] = useSearchParams();
  const [otpAuthOpen, setOtpAuthOpen] = useState(false);
  const [otpChannel, setOtpChannel] = useState(`email`);
  const [otpView, setOtpView] = useState<'send' | 'verify'>('send');

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<verifyOtpFormSchemaInterface>({
    resolver: zodResolver(verifyOtpFormSchema),
  });

  const { data, error, isLoading } = useQuery<any, any, searchCardApiInterface>({
    queryKey: ['search-card', searchValue],
    queryFn: () =>
      cardService.searchCard({
        id: searchValue,
      }),
    enabled: searchValue.length > 0,
  });

  const { data: contactDetails, isLoading: contactDetailsLoading } = useQuery<
    any,
    any,
    getMaskedContactDetailsInterface
  >({
    queryKey: ['card-contact-details', searchValue],
    queryFn: () =>
      cardService.getMaskedContactDetails({
        lasrra_id: searchValue,
      }),
    enabled: searchValue.length > 0,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      cardService?.requestOtp({
        lasrra_id: searchValue,
        channel: otpChannel,
      }),
    onSuccess: () => {
      setOtpView('verify');
    },
    onMutate: () => {
      toast.success(`OTP has been sent`);
    },
    onError: () => {
      toast.error(`Sorry something happended! Try again `);
    },
  });

  const { mutate: verifyOtp, isPending: otpVerificationLoading } = useMutation<
    any,
    any,
    verifyOtpFormSchemaInterface
  >({
    mutationFn: ({ code }) => cardService.verifOtp({ code, lasrra_id: searchValue }),
    onSuccess: () => {
      navigate(`/${ROUTES['card-relocation']}?search=${searchValue}`);
    },
    onError: () => {
      toast.error(`Sorry something happended! Try again `);
    },
  });

  useEffect(() => {
    const search = searchParams.get('search');
    if (search?.length) {
      setSearchValue(search);
    }
  }, [searchParams]);

  const onSubmit: SubmitHandler<z.infer<typeof verifyOtpFormSchema>> = ({ code }) => {
    verifyOtp({ code });
  };

  return (
    <>
      <Modal
        classNames={{
          header: `px-0`,
        }}
        isOpen={otpAuthOpen}
        onOpenChange={setOtpAuthOpen}
      >
        <ModalContent>
          {() =>
            otpView === 'send' ? (
              <>
                <ModalHeader className='flex flex-col gap-1 font-domine text-[18px] font-bold border-b border-b-green-13 mx-4 pb-1'>
                  Select OTP Channel
                </ModalHeader>
                <ModalBody className='flex flex-col gap-[4rem]'>
                  <RadioGroup
                    color='success'
                    className='flex flex-col gap-[1.5rem] py-[1.5rem]'
                    value={otpChannel}
                    onValueChange={setOtpChannel}
                  >
                    <Radio
                      classNames={{
                        label: `text-green-19/60 font-poppins`,
                      }}
                      value='email'
                    >
                      {!!contactDetails?.email?.length
                        ? `Send to email : ${contactDetails?.email}`
                        : `Email not available`}
                    </Radio>
                    <Radio
                      classNames={{
                        label: `text-green-19/60 font-poppins`,
                      }}
                      value='phone'
                    >
                      {!!contactDetails?.phoneNumber?.length
                        ? `Send to phone : ${contactDetails?.phoneNumber}`
                        : `Phone number not available`}
                    </Radio>
                  </RadioGroup>
                  <div className='flex justify-end'>
                    <Button
                      label='Send OTP'
                      size={'sm'}
                      variant={'default'}
                      themed={'theme1'}
                      className='text-[0.875rem]'
                      isLoading={isPending}
                      onClick={() => mutate()}
                    />
                  </div>
                </ModalBody>
              </>
            ) : (
              <>
                <ModalHeader className='flex flex-col gap-1 font-domine text-[18px] font-bold border-b border-b-green-13 mx-4 pb-1'>
                  Verify Otp
                </ModalHeader>
                <ModalBody className='py-4'>
                  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[2rem]'>
                    <InputErrorWrapper error={errors?.code?.message}>
                      <input
                        {...register('code')}
                        placeholder='Enter OTP'
                        className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                      />
                    </InputErrorWrapper>
                    <div className='flex justify-between'>
                      <Button
                        label='Resend OTP'
                        size={'sm'}
                        variant={'naked'}
                        type='button'
                        themed={'theme1'}
                        className='text-[0.875rem]'
                        isLoading={false}
                        onClick={() => {
                          mutate();
                        }}
                      />
                      <Button
                        label='Verify'
                        size={'sm'}
                        variant={'default'}
                        themed={'theme1'}
                        className='text-[0.875rem]'
                        isLoading={otpVerificationLoading}
                        type='submit'
                      />
                    </div>
                  </form>
                </ModalBody>
              </>
            )
          }
        </ModalContent>
      </Modal>
      <div className='container pt-[2.94rem] md:pt-[1.56rem] w-full max-w-[69.375rem] px-container-base'>
        <div className='w-full flex flex-col md:border md:border-green-10 md:dark:border-green-2 md:bg-grey-2/20 md:dark:bg-green-12 rounded-[0.25rem] md:shadow-4 md:px-container-base lg:px-[7rem] py-[2rem]'>
          <div
            onClick={() => navigate(-1)}
            className='w-max flex items-center text-green-11 mb-[1.75rem] group cursor-pointer'
          >
            <div className='w-[1.75rem] h-[1.75rem] grid place-items-center rounded-[50px] group-hover:bg-black-1/10 dark:group-hover:bg-white/10 transition-colors ease-in-out duration-300'>
              <Icon name='arrowBack' />
            </div>
            <span className='uppercase font-[600] group-hover:translate-x-1 transition-transform ease-in-out duration-150'>
              go Back
            </span>
          </div>
          <div className='flex flex-col gap-4 mb-[3.3rem] md:mb-[4.1rem]'>
            <h3 className='font-domine text-black-1 dark:text-green-5 text-[2rem] font-[700] leading-[1.8125rem] tracking-[-0.04rem]'>
              Check card status
            </h3>
            <p className='text-grey-3 text-[0.9375rem] font-[500] tracking-[-0.01875rem]'>
              Stay informed about your application updates
            </p>
          </div>
          {/* <div className='w-full max-w-[44.2rem] mx-auto mb-[2.24rem] md:mb-[6.94rem]'>
          <SearchInput
            onButtonClick={() => {}}
            defaultValue={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </div> */}
          {isLoading ? (
            <div className='w-full min-h-[300px] flex flex-col items-center justify-center gap-4  mb-[4.4rem]'>
              <ReactLoading type='cubes' color='#B2DFC4' height={100} width={100} />
              <span className='font-domine md:text-[20px] text-center'>
                We are checking your card...
              </span>
            </div>
          ) : error ? (
            <div className='w-full min-h-[300px] flex flex-col items-center justify-center gap-4  mb-[4.4rem]'>
              <Icon name='peopleShakingSvg' />
              <span className='font-domine md:text-[20px]'>Card not found</span>
            </div>
          ) : (
            <div className='w-full flex flex-col border border-green-13/80 dark:border-green-13/30 mb-[4.4rem]'>
              <div className='bg-green-14 dark:bg-green-14/[0.15] px-container-base lg:px-container-lg py-[1.5rem] text-[0.875rem] md:text-[1.375rem] text-black-5 dark:text-green-3 font-[500] leading-[0.75rem] md:leading-[1.25rem]'>
                Card Information
              </div>
              <div className='w-full flex flex-col'>
                {(
                  [
                    { title: 'Name', value: `${data?.first_name} ${data?.last_name}` },
                    { title: 'Lassra ID', value: data?.lasrra_id },
                    { title: 'Card Status', value: data?.card_status },
                    { title: 'Collection Center', value: data?.collection_center },
                    { title: 'Local Government', value: data?.local_government },
                  ] as { title: string; value: string }[]
                )?.map((i, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      'w-full grid grid-cols-2 py-[2rem] px-container-base lg:px-container-lg text-black-6 dark:text-green-3',
                      `border-b border-b-green-13/80 dark:border-b-green-13/30`,
                    )}
                  >
                    <p className='text-[0.75rem] md:text-[1rem]'>{i?.title}</p>
                    <p className='text-[0.75rem] md:text-[1rem]'>{i?.value}</p>
                  </div>
                ))}
                <div
                  className={cn(
                    'w-full grid grid-cols-2   py-[2rem] px-container-base lg:px-container-lg text-black-6 dark:text-green-3',
                    data?.requires_validation ? `` : `hidden`,
                    `border-b border-b-green-13/80 dark:border-b-green-13/30`,
                  )}
                >
                  <p className='text-[0.75rem] md:text-[1rem]'>Requires Validation</p>
                  <p className='text-[0.75rem] md:text-[0.85rem] text-red-600 dark:text-red-400 font-bold'>
                    {' '}
                    Your registration requires Validation
                  </p>
                </div>
                <div
                  className={cn(
                    'w-full grid grid-cols-2  py-[2rem] px-container-base lg:px-container-lg  dark:text-green-3',
                    data?.requires_recapture ? `` : `hidden`,
                  )}
                >
                  <p className='text-[0.75rem] md:text-[1rem]'>Requires Recapture</p>
                  <p className='text-[0.75rem] md:text-[1rem] text-red-300 font-bold'>
                    {' '}
                    Your registration requires recapture
                  </p>
                </div>
              </div>
            </div>
          )}
          <div
            className={cn(
              'flex items-center justify-between w-full max-w-[43.75rem] gap-[1.75rem] mx-auto',
              error || isLoading ? 'hidden' : '',
            )}
          >
            <Button
              label='Relocate card'
              variant={'default'}
              themed={'theme1'}
              className='text-[0.875rem] md:text-[1rem]'
              // disabled={data?.collection_center === 'N/A' || data?.local_government === 'N/A'}
              onClick={() =>
                //TODO: CORRECT CONDITION
                true
                  ? setOtpAuthOpen(true)
                  : navigate(`/${ROUTES['card-relocation']}?search=${searchValue}`)
              }
            />
            <Button
              label='Deliver card'
              variant={'naked'}
              className='text-[0.875rem] md:text-[1rem]'
              // disabled={data?.collection_center === 'N/A' || data?.local_government === 'N/A'}
              onClick={() => navigate(`/${ROUTES['card-delivery']}?search=${searchValue}`)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardQuery;
