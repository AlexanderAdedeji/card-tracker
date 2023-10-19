import Icon from '@/lib/icon';
import { cn } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const ThemeToggler = () => {
  // enabled = light mode
  const [enabled, setEnabled] = useState(false);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setEnabled(true);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setEnabled(false);
    }
  };

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, []);

  return (
    <div
      onClick={() => toggleTheme()}
      className={cn(
        'w-[40px] h-[40px] cursor-pointer rounded-[62.5rem] hover:bg-black-1/[0.05]  hover:opacity-80 transition-all ease-in-out duration-300 grid overflow-hidden place-items-center',
      )}
    >
      {enabled ? (
        <span className={cn()}>
          <Icon name='sun' />
        </span>
      ) : (
        <span>
          <Icon name='moon' />
        </span>
      )}
    </div>
  );
};

export default ThemeToggler;
