import Button from '@/components/Button';
import Icon from '@/lib/icon';
import React from 'react';
import ThemeToggler from '../ThemeToggler';

const Nav = () => {
  return (
    <div className='w-full lg:container lg:pt-[2.87rem] fixed top-0 right-0 left-0 z-10'>
      <div className='sticky top-0 right-0 left-0 flex justify-between items-center py-[0.5rem] px-container-base lg:px-container-lg lg:rounded-[1.875rem] bg-nav'>
        <div className='flex items-center gap-[1.8rem] '>
          <Icon name='logo' />
          <span className='hidden md:flex max-w-[5.12rem] text-black-1 text-[0.69688rem] font-[500] tracking-[0.05575rem]'>
            LAGOS STATE RELOCATION RUNNINGS
          </span>
        </div>
        <div className='flex items-center gap-4 md:gap-[1.8rem] '>
          <h4 className='text-black-2 text-[0.875rem] md:text-[1.25rem] font-[600] leading-[2.0625rem]'>
            Card Tracking Portal
          </h4>
          <Button
            variant={'default'}
            size={'sm'}
            label='Get started'
            className='hidden md:inline-block'
          />
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default Nav;
