import Icon from '@/lib/icon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import landingMan from '@/assets/images/landing-man.png';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { routeTypeEnums } from '@/routes/routes.types';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full relative flex flex-col overflow-x-hidden'>
      <div className='fixed top-0 right-0 w-full  z-[0]'>
        <Icon name='landingMask' svgProp={{ className: 'mx-auto' }} />
      </div>
      <div className='w-full container px-container-base md:px-0 md:pl-container-lg flex flex-col md:flex-row md:justify-between z-[1] overflow-hidden'>
        <div className=' flex flex-col items-start max-w-full md:max-w-[560px] flex-grow-0 flex-shrink-1 basis-auto pt-[11.19rem] '>
          <h1 className='text-[2rem] md:text-[3.75rem] text-green-3 font-domine font-[700] mb-[1.62rem] md:mb-[3.25rem] leading-[2.2rem] md:leading-[4rem]'>
          Elevate your Lagos experience with the 
            <span className='bg-text-1 bg-clip-text text-transparent'>LAG ID card </span>solutions
          </h1>
          <p className=' text-green-4 font-[500] mb-8 md:mb-[12.5rem]'>
            Our mission is to simplify the process of obtaining and maintaining your LASRRA card, a
            vitality identity document that connects you to a range of essential services.
          </p>
          <Button
            label='Get started'
            variant={'default'}
            size={'sm'}
            className='md:ml-[8.86rem]'
            themed={'theme1'}
            onClick={() => navigate(`/${routeTypeEnums.Enum.onboarding}`)}
          />
        </div>
        <div className='relative flex mx-auto justify-center max-w-full md:max-w-[calc(100%-560px)] flex-grow-0 flex-shrink-1 basis-auto  md:pt-[5.44rem]'>
          <LazyLoadImage
            wrapperClassName='md:min-w-max'
            effect='blur'
            className='transition-all md:min-w-max'
            alt=''
            src={landingMan}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
