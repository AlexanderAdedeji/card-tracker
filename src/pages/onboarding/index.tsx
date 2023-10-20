import onboardingHand from '@/assets/images/onboardingHand.png';
import ScrollToTop from '@/components/general/ScrollToTop';
import SearchInput from '@/components/general/SearchInput';
import Icon from '@/lib/icon';
import { routeTypeEnums } from '@/routes/routes.types';
import { cn } from '@nextui-org/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(``);

  const handleSearch = (i: string) => {
    if (i?.length) {
      navigate(`/${routeTypeEnums.Enum['card-query']}?search=${i}`);
    } else {
      toast.error(`Please enter your card ID`);
    }
  };

  return (
    <div className='container w-full h-full pt-[8.06rem] md:pt-[12.5rem] flex flex-col items-center'>
      <h1 className='mx-auto max-w-[51.5625rem] text-[1.625rem] md:text-[3.75rem] font-domine font-[700] leading-[2.12119rem] md:leading-[4.375rem] text-center text-black-2 dark:text-green-5 mb-8 px-container-base'>
        Seamless Lassra card access for Lagos residents
      </h1>
      <div className='w-full flex items-start flex-col lg:flex-row md:justify-between lg:max-h-[25rem] md:gap-8 mb-[2.94rem] lg:mb-4'>
        <div className='relative flex-grow-0 flex-shrink-1 basis-auto xl:min-w-[50%]'>
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
      <div className='flex px-container-base w-full justify-center relative'>
        <SearchInput
          onChange={(e) => setSearchValue(e?.currentTarget?.value)}
          onButtonClick={() => {
            handleSearch(searchValue);
          }}
        />
      </div>
      <div className='container px-container-base lg:px-container-base grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-[1.75rem] my-[6.94rem]'>
        {(
          [
            {
              icon: <Icon name='checkCardStatus' svgProp={{ className: 'w-full' }} />,
              className: `bg-green-8`,
              description: `Stay informed about your application updates`,
              link: routeTypeEnums.Enum['card-query'],
              title: (
                <h4 className='text-[1.5335rem] font-[700] '>
                  <span className='font-domine font-[600] text-green-7'>Check</span> Card Status
                </h4>
              ),
            },
            {
              icon: <Icon name='relocateMyCard' svgProp={{ className: 'w-full' }} />,
              className: `bg-blue-1`,
              description: `Seamlessly update your information if you are moving within or outside lagos.`,
              link: routeTypeEnums.Enum['card-relocation'],
              title: (
                <h4 className='text-[1.5335rem] font-[700] '>
                  <span className='font-domine font-[600] text-blue-2'>Relocate</span> My Card
                </h4>
              ),
            },
            {
              icon: <Icon name='deliverMyCard' svgProp={{ className: 'w-full' }} />,
              className: `bg-yellow-1`,
              description: `Recieve your Lassra card at your preferred address, eliminating the need for long queues`,
              link: routeTypeEnums.Enum['card-delivery'],
              title: (
                <h4 className='text-[1.5335rem] font-[700] '>
                  <span className='font-domine font-[600] text-brown-1'>Check</span> Card Status
                </h4>
              ),
            },
          ] as {
            icon: JSX.Element;
            className: string;
            title: JSX.Element;
            description: string;
            link: string;
          }[]
        )?.map((i, idx) => (
          <div
            onClick={() => navigate(`/${i?.link}`)}
            key={idx}
            className={cn(
              'flex flex-col gap-[2.5rem] px-[3.5rem] py-[2.5rem] rounded-[0.625rem] cursor-pointer border-2 border-transparent hover:border-green-9 transition-colors ease-in-out duration-200',
              i.className,
            )}
          >
            <div className='max-h-[17.95rem]'>{i?.icon}</div>
            <div className='flex flex-col gap-[0.75rem] text-black-3'>
              {i?.title}
              <p className='text-[0.86263rem]'>{i?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
