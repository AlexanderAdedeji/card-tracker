import cardService from '@/adapters/card';
import Button from '@/components/Button';
import InputErrorWrapper from '@/components/hocs/InputErrorWrapper';
import Icon from '@/lib/icon';
import { searchCardApiInterface } from '@/types/api.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';

const deliverCardFormSchema = z.object({
  surname: z.string(),
  other_name: z.string(),
  email_address: z.string().email(),
  house_number: z.string(),
  street_name: z.string(),
  city: z.string(),
  state: z.string(),
});

const DeliverCard = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(``);
  const [searchParams] = useSearchParams();

  const { data, error, isLoading } = useQuery<any, any, searchCardApiInterface>({
    queryKey: ['search-card', searchValue],
    queryFn: () =>
      cardService.searchCard({
        id: searchValue,
      }),
    enabled: searchValue.length > 0,
  });

  const {
    register,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof deliverCardFormSchema>>({
    resolver: zodResolver(deliverCardFormSchema),
  });

  useEffect(() => {
    const search = searchParams.get('search');
    if (search?.length) {
      setSearchValue(search);
    }
  }, [searchParams]);

  useEffect(() => {
    reset({
      surname: data?.last_name,
      other_name: data?.first_name,
    });
  }, [data]);

  return (
    <div className='container pt-[2.94rem] md:pt-[1.56rem] w-full max-w-[69.375rem] px-container-base'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[2rem] md:border md:border-green-10 md:dark:border-green-2 md:bg-grey-2/20 md:dark:bg-green-12 rounded-[0.25rem] md:shadow-4 md:px-container-base lg:px-[3.5rem] py-[2rem]'>
        <div className='flex flex-col'>
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
          <div className='flex flex-col gap-4 mb-[3rem]'>
            <h3 className='font-domine text-black-1 dark:text-green-5 text-[2rem] font-[700] leading-[1.8125rem] tracking-[-0.04rem]'>
              Deliver card
            </h3>
            <p className=' text-blue-3/95 text-[0.9375rem] tracking-[-0.01875rem]'>
              Recieve your Lassra card at your preferred address, eliminating the need for long
              queues
            </p>
          </div>
          <div className='flex flex-col gap-4 mb-[1.5rem]'>
            <h3 className='font-domine text-black-1 dark:text-green-5 text-[1.5rem] font-[500] leading-[1.8125rem] tracking-[-0.04rem]'>
              Delivery Details
            </h3>
            <p className=' text-blue-3/95 text-[0.9375rem]  tracking-[-0.01875rem]'>
              Complete your delivery by providing your payment details order
            </p>
          </div>
          <div className='flex flex-col gap-[2rem]'>
            <InputErrorWrapper error={errors?.surname?.message}>
              <div className='flex flex-col gap-2'>
                <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                  Surname
                </label>
                <input
                  {...register('surname')}
                  className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                />
              </div>
            </InputErrorWrapper>
            <InputErrorWrapper error={errors?.other_name?.message}>
              <div className='flex flex-col gap-2'>
                <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                  Other name
                </label>
                <input
                  {...register('other_name')}
                  className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                />
              </div>
            </InputErrorWrapper>
            <InputErrorWrapper error={errors?.email_address?.message}>
              <div className='flex flex-col gap-2'>
                <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                  Email Address
                </label>
                <input
                  {...register('email_address')}
                  className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                />
              </div>
            </InputErrorWrapper>
            <div className='flex flex-col gap-[1.5rem]'>
              <label className='text-black-4/90 dark:text-green-3 text-[1.125rem] font-poppins font-[500] tracking-[-0.02rem]'>
                Delivery Address
              </label>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[1.88rem] gap-y-[1.75rem]'>
                <InputErrorWrapper error={errors?.house_number?.message}>
                  <div className='flex flex-col gap-2'>
                    <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                      House Number
                    </label>
                    <input
                      {...register('house_number')}
                      className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                    />
                  </div>
                </InputErrorWrapper>
                <InputErrorWrapper error={errors?.street_name?.message}>
                  <div className='flex flex-col gap-2'>
                    <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                      Street Name
                    </label>
                    <input
                      {...register('street_name')}
                      className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                    />
                  </div>
                </InputErrorWrapper>
                <InputErrorWrapper error={errors?.city?.message}>
                  <div className='flex flex-col gap-2'>
                    <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                      City
                    </label>
                    <input
                      {...register('city')}
                      className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                    />
                  </div>
                </InputErrorWrapper>
                <InputErrorWrapper error={errors?.state?.message}>
                  <div className='flex flex-col gap-2'>
                    <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                      State
                    </label>
                    <input
                      {...register('state')}
                      className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                    />
                  </div>
                </InputErrorWrapper>
                <div
                  className={cn(
                    'flex items-center justify-between w-full max-w-[43.75rem] gap-[1.75rem] mx-auto py-[3rem] md:hidden',
                  )}
                >
                  <Button
                    label='Cancel'
                    variant={'default'}
                    themed={'theme1'}
                    className='text-[0.875rem] md:text-[1rem]'
                    disabled={true}
                  />
                  <Button
                    label='Make payment'
                    variant={'naked'}
                    className='text-[0.875rem] md:text-[1rem]'
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:flex bg-green-16 dark:bg-green-17 py-[2.38rem] px-[2.69rem] flex-col'>
          <h4 className='text-[1.5rem] font-domine font-[700] text-black-4/80 dark:text-green-18/80 mb-4'>
            Order Summary
          </h4>
          <p className='text-black-4/50 dark:text-green-18/50 text-[1.375rem] font-[500] mb-2'>
            Items
          </p>
          <div className='flex items-center justify-between py-4 border-t border-b boder-grey-4/90 mb-4'>
            <span className=' text-black-4/80 dark:text-green-18/80 font-[500]'>
              Lasrra ID Card
            </span>
            <span className=' text-black-4/80 dark:text-green-18/80 font-[500]'>₦2500</span>
          </div>
          <h4 className='mb-4  text-black-4/80 dark:text-green-18/80 font-[500]'>FROM:</h4>
          <p className='max-w-[17rem] text-blue-3 mb-4'>
            LASRRA Head Office 4 Registration Close, Ikeja.
          </p>
          <h4 className='mb-4  text-black-4/80 dark:text-green-18/80 font-[500]'>TO:</h4>
          <p className='max-w-[17rem] text-blue-3 mb-4'>
            {watch('house_number')}, {watch('street_name')}, {watch('city')}, {watch('state')}
          </p>
          <div className='flex justify-end'>
            <span className=' text-black-4/80 dark:text-green-18/80 font-[500]'>₦200</span>
          </div>
          <div className='flex items-center justify-between py-2  mb-4'>
            <span className=' text-black-4/80 dark:text-green-18/80 font-[500]'>Total</span>
            <span className=' text-black-4/80 dark:text-green-18/80 font-[500]'>₦2700</span>
          </div>
          <div
            className={cn(
              'flex items-center justify-between w-full max-w-[43.75rem] gap-[1.75rem] mx-auto py-[3rem]',
            )}
          >
            <Button
              label='Cancel'
              variant={'default'}
              themed={'theme1'}
              className='text-[0.875rem] md:text-[1rem]'
              disabled={true}
            />
            <Button
              label='Make payment'
              variant={'naked'}
              className='text-[0.875rem] md:text-[1rem]'
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverCard;
