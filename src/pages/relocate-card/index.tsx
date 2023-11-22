import Icon from '@/lib/icon';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input, cn } from '@nextui-org/react';
import InputErrorWrapper from '@/components/hocs/InputErrorWrapper';
import MyButton from '@/components/Button';
import { Select, SelectSection, SelectItem, Button } from '@nextui-org/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import cardService from '@/adapters/card';
import ReactLoading from 'react-loading';
import locationService from '@/adapters/location';
import {
  collectionCenterInterface,
  lgaApiInterface,
  searchCardApiInterface,
} from '@/types/api.types';
import toast from 'react-hot-toast';
import { IRelocateCard } from '@/adapters/card/card.types';

const relocateCardFormSchema = z.object({
  surname: z.string(),
  other_name: z.string(),
  from_lga: z.string(),
  from_collection_center: z.string(),
  to_lga: z.string(),
  to_collection_center: z.string(),
});

const RelocateCard = () => {
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

  const { register, watch, reset, trigger, setValue } = useForm<
    z.infer<typeof relocateCardFormSchema>
  >({
    resolver: zodResolver(relocateCardFormSchema),
  });

  const { data: lga, isLoading: lgaLoading } = useQuery<lgaApiInterface[]>({
    queryKey: ['get-local-governments'],
    queryFn: () => locationService.getLocalGoverments(),
  });

  const { data: cc, isLoading: ccLoading } = useQuery<collectionCenterInterface>({
    queryKey: ['get-collection-centers', watch('to_lga')],
    queryFn: () =>
      locationService.getCollectionCenterByLga({
        lag_code: watch('to_lga'),
      }),
    enabled: !!watch('to_lga')?.length,
  });

  const { isPending, mutate } = useMutation<any, any, IRelocateCard>({
    mutationFn: (data) => cardService.relocateCard(data),
    onError: (err) => {
      toast.error(`${err?.message}`);
    },
  });

  const handleRelocateCard = () => {
    mutate({
      destination_collection_centre: watch('to_collection_center'),
      destination_local_government: watch('to_lga'),
      lasrra_id: searchValue,
      source_collection_centre: ``,
      source_local_government: ``,
    });
  };

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
      <div className='w-full flex flex-col md:border md:border-green-10 md:dark:border-green-2 md:bg-grey-2/20 md:dark:bg-green-12 rounded-[0.25rem] md:shadow-4 md:px-container-base lg:px-[7rem] py-[2rem]'>
        {isLoading ? (
          <div className='w-full min-h-[300px] flex flex-col items-center justify-center gap-4  mb-[4.4rem]'>
            <ReactLoading type='cubes' color='#B2DFC4' height={100} width={100} />
            <span className='font-domine md:text-[20px] text-center'>
              We are retrieving card ...
            </span>
          </div>
        ) : (
          <>
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
                Relocate card
              </h3>
              <p className='text-grey-3 text-[0.9375rem] font-[500]  tracking-[-0.01875rem]'>
                Get your government-issued LASSA card at this location
              </p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-[3.875rem] gap-y-[2rem] md:gap-y-[3.75rem]'>
              <InputErrorWrapper>
                <div className='flex flex-col gap-2'>
                  <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                    Surname
                  </label>
                  <input
                    disabled
                    {...register('surname')}
                    className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                  />
                </div>
              </InputErrorWrapper>
              <InputErrorWrapper>
                <div className='flex flex-col gap-2'>
                  <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                    Other names
                  </label>
                  <input
                    disabled
                    {...register('other_name')}
                    className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent'
                  />
                </div>
              </InputErrorWrapper>
              <InputErrorWrapper>
                <div className='flex flex-col gap-2'>
                  <label className='text-black-4/90 dark:text-green-3 text-[1.375rem] font-poppins font-[500] tracking-[-0.02rem]'>
                    FROM
                  </label>
                  <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                    Local Governments
                  </label>
                  <input className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent' />
                </div>
              </InputErrorWrapper>
              <InputErrorWrapper>
                <div className='flex flex-col gap-2 h-full justify-end'>
                  <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                    Collection center
                  </label>
                  <input className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent' />
                </div>
              </InputErrorWrapper>
              <InputErrorWrapper>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-black-4/90 dark:text-green-3 text-[1.375rem] font-poppins font-[500] tracking-[-0.02rem]'>
                    TO
                  </label>
                  <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                    Local Government (Pick-up location)
                  </label>
                  <Select
                    aria-labelledby='Local Government'
                    items={lga ?? []}
                    placeholder='Select Local Government...'
                    isLoading={lgaLoading}
                    classNames={{
                      base: 'w-full border border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] !bg-transparent',
                      listboxWrapper: '!bg-transparent',
                      trigger: '!bg-transparent',
                    }}
                    selectedKeys={[watch('to_lga')]}
                    onChange={(e) => {
                      setValue('to_lga', e.target.value);
                      trigger();
                    }}
                  >
                    {(item) => (
                      <SelectItem key={item?.id} value={item?.code}>
                        {item?.name}
                      </SelectItem>
                    )}
                  </Select>
                </div>
              </InputErrorWrapper>
              <InputErrorWrapper>
                <div className='flex flex-col gap-2 h-full justify-end'>
                  <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem] '>
                    Collection center
                  </label>
                  <Select
                    aria-labelledby='Collection Center'
                    items={[cc] ?? []}
                    placeholder='Select Collection Center'
                    isLoading={ccLoading}
                    disabled={!watch('to_lga')?.length}
                    classNames={{
                      base: 'w-full border border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] !bg-transparent',
                      listboxWrapper: '!bg-transparent',
                      trigger: '!bg-transparent',
                    }}
                    selectedKeys={[watch('to_collection_center')]}
                    onChange={(e) => {
                      setValue('to_collection_center', e.target.value);
                      trigger();
                      console.log('checks', e.target.value);
                    }}
                  >
                    {(item) => (
                      <SelectItem key={`${item?.code}`} value={item?.code}>
                        {`${item?.name}`}
                      </SelectItem>
                    )}
                  </Select>
                </div>
              </InputErrorWrapper>
            </div>
            <div
              className={cn(
                'flex items-center py-[2.8rem] justify-end w-full  gap-[1.75rem] mx-auto',
                false ? 'hidden' : '',
              )}
            >
              <MyButton
                onClick={() => {
                  handleRelocateCard();
                }}
                disabled={isPending}
                label={isPending ? 'Relocating...' : 'Relocate Card'}
                variant={'default'}
                className='text-[0.875rem] md:text-[1rem]'
                isLoading={isPending}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RelocateCard;
