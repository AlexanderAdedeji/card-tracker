import Button from '@/components/Button';
import Icon from '@/lib/icon';
import ThemeToggler from '../ThemeToggler';
import { routeTypeEnums } from '@/routes/routes.types';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@nextui-org/react';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='w-full lg:container lg:pt-[0.5rem] sticky  top-0 right-0 left-0 z-10 lg:px-container-lg  backdrop-blur'>
      <div className='sticky top-0 right-0 left-0 flex justify-between items-center py-[0.5rem] px-container-base lg:px-container-lg lg:rounded-[1.875rem] bg-nav'>
        <div className='flex items-center gap-[1.8rem] '>
          <Icon
            svgProp={{
              onClick: () => navigate(`/`),
              className: 'cursor-pointer',
            }}
            name='logo'
          />
          <span className='hidden md:flex max-w-[12.125rem] text-black-1 text-[0.69688rem] font-[500] tracking-[0.05575rem]'>
            Lagos State Residents Registration Agency
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
            className={cn('hidden md:inline-block', location?.pathname === '/' ? '' : '!hidden')}
            onClick={() => navigate(`/${routeTypeEnums.Enum.onboarding}`)}
          />
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default Nav;
