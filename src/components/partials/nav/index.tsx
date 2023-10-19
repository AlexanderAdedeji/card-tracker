import Button from '@/components/Button';
import Icon from '@/lib/icon';
import React from 'react';

const Nav = () => {
  return (
    <div className='w-full lg:container lg:pt-[2.87rem]'>
      <div className='sticky top-0 right-0 left-0 flex justify-between items-center py-[0.5rem] px-[3.5rem] rounded-[1.875rem] bg-nav'>
        <div className='flex items-center gap-[1.8rem] '>
          <Icon name='logo' />
          <span className='max-w-[5.12rem] text-black-1 text-[0.69688rem] font-[500] tracking-[0.05575rem]'>
            LAGOS STATE RELOCATION RUNNINGS
          </span>
        </div>
        <div className='flex items-center gap-[1.8rem] '>
          <h4 className='text-black-2 text-[1.25rem] font-[600] leading-[2.0625rem]'>
            Card Tracking Portal
          </h4>
          <Button variant={'default'} size={'sm'} label='Get started' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
