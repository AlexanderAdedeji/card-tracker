import Icon from '@/lib/icon';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, cn } from '@nextui-org/react';
import InputErrorWrapper from '@/components/hocs/InputErrorWrapper';
import Button from '@/components/Button';

const RelocateCard = () => {
  const navigate = useNavigate();

  return (
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
              <input className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent' />
            </div>
          </InputErrorWrapper>
          <InputErrorWrapper>
            <div className='flex flex-col gap-2'>
              <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                Other names
              </label>
              <input className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent' />
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
            <div className='flex flex-col gap-2'>
              <label className='text-black-4/90 dark:text-green-3 text-[1.375rem] font-poppins font-[500] tracking-[-0.02rem]'>
                TO
              </label>
              <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem]'>
                Local Government (Pick-up location)
              </label>
              <input className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent' />
            </div>
          </InputErrorWrapper>
          <InputErrorWrapper>
            <div className='flex flex-col gap-2 h-full justify-end'>
              <label className='text-black-4/90 dark:text-green-3 font-poppins font-[500] tracking-[-0.02rem] '>
                Collection center
              </label>
              <input className='form-input border-blue-1 focus:ring-0 focus-visible:border-blue-1 f rounded-[4px] bg-transparent' />
            </div>
          </InputErrorWrapper>
        </div>
        <div
          className={cn(
            'flex items-center py-[2.8rem] justify-end w-full  gap-[1.75rem] mx-auto',
            false ? 'hidden' : '',
          )}
        >
          <Button
            label='Relocate Card'
            variant={'default'}
            className='text-[0.875rem] md:text-[1rem]'
          />
        </div>
      </div>
    </div>
  );
};

export default RelocateCard;
