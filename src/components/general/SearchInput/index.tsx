import { cn } from '@nextui-org/react';
import React, { HTMLAttributes, forwardRef } from 'react';

interface ISearchInput extends HTMLAttributes<HTMLInputElement> {
  onButtonClick: () => void;
  buttonLabel?: string;
  wrapperClassName?: string;
}

const SearchInput = forwardRef<HTMLInputElement, ISearchInput>(
  ({ onButtonClick, buttonLabel = 'Search', wrapperClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative w-full h-[2.25rem] md:h-[3.5rem] max-w-[55.5rem] rounded-[1.25rem] bg-green-5/50 dark:bg-green-4 flex overflow-hidden border border-grey-1/[0.15] dark:border-grey-1/[15]',
          wrapperClassName,
        )}
      >
        <input
          ref={ref}
          placeholder='Enter card ID...'
          className='flex-grow bg-transparent border-none ring-0 outline-none placeholder:text-[14px] placeholder:font-domine text-black-3 '
          {...props}
        />
        <button
          onClick={() => onButtonClick()}
          className='h-full relative px-[3rem] bg-btnGreenDeep dark:bg-btnGreen text-green-6 dark:text-black-1 hover:opacity-90 transition-opacity ease-in-out duration-300'
        >
          {buttonLabel}
        </button>
      </div>
    );
  },
);

export default SearchInput;
