import onboardingHand from '@/assets/images/onboardingHand.png';
import SearchInput from '@/components/SearchInput';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Onboarding = () => {
  return (
    <div className='container w-full h-full pt-[8.06rem] md:pt-[12.5rem] flex flex-col items-center'>
      <h1 className='mx-auto max-w-[51.5625rem] text-[1.625rem] md:text-[3.75rem] font-domine font-[700] leading-[2.12119rem] md:leading-[4.375rem] text-center text-black-2 dark:text-green-5 mb-8 px-container-base'>
        Seamless Lassra card access for Lagos residents
      </h1>
      <div className='w-full flex items-start flex-col lg:flex-row md:justify-between md:max-h-[25rem] md:gap-8 mb-[2.94rem] md:mb-0'>
        <div className='relative flex-grow-0 flex-shrink-1 basis-auto lg:min-w-[50%]'>
          <LazyLoadImage
            wrapperClassName='md:min-w-max'
            effect='blur'
            className='transition-all md:min-w-max'
            alt=''
            src={onboardingHand}
          />
        </div>
        <div className='relative h-full flex-grow flex justify-start md:pt-14 px-container-base lg:px-0 lg:pr-container-lg'>
          <p className=' w-full lg:max-w-[28.75rem] font-[400] md:font-[500] leading-[2.0625rem] ext-balck-1 dark:text-green-5'>
            Your Lassra card is more than just a piece of plastic - its your getaway to government
            services, healthcare, education and more. Our userfriendly digital platform brings a new
            era of convienience and accesibility to the palm of your hand.
          </p>
        </div>
      </div>
      <div className='flex px-container-base w-full justify-center'>
        <SearchInput />
      </div>
    </div>
  );
};

export default Onboarding;
