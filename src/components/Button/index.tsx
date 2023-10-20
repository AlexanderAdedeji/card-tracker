import React, { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@nextui-org/react';

const buttonVariants = cva('rounded-[1.25rem] px-[2rem] font-domine ', {
  variants: {
    variant: {
      default: 'text-white bg-btnFull ',
      naked:
        'text-black-1/90 dark:text-green-3  border border-green-1 dark:border-green-15  hover:bg-btnFull transition-colors ease-in-out duration-300',
    },
    size: {
      default: 'h-[2.8rem]',
      sm: 'h-[2.23rem]',
      lg: 'h-[3.18rem]',
    },
    themed: {
      default: '',
      theme1: 'dark:bg-btnGreen',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
    themed: 'default',
  },
});

interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ label, className, variant, size, themed, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, themed, className }))}
        ref={ref}
        {...props}
      >
        {label}
      </button>
    );
  },
);

export default Button;
