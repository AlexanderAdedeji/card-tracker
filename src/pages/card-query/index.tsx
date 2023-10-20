import Button from '@/components/Button';
import SearchInput from '@/components/general/SearchInput';
import Icon from '@/lib/icon';
import { routeTypeEnums } from '@/routes/routes.types';
import { cn } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CardQuery = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchValue(search);
    }
  }, [searchParams]);

  return (
    <div className='container pt-[4.94rem] md:pt-[12.56rem] w-full max-w-[69.375rem] px-container-base'>
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
        <div className='flex flex-col gap-4 mb-[3.3rem] md:mb-[4.1rem]'>
          <h3 className='font-domine text-black-1 dark:text-green-5 text-[2rem] font-[700] leading-[1.8125rem] tracking-[-0.04rem]'>
            Check card status
          </h3>
          <p className='text-grey-3 text-[0.9375rem] font-[500] leading-[0.75rem] tracking-[-0.01875rem]'>
            Stay informed about your application updates
          </p>
        </div>
        <div className='w-full max-w-[44.2rem] mx-auto mb-[2.24rem] md:mb-[6.94rem]'>
          <SearchInput
            onButtonClick={() => {}}
            defaultValue={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </div>
        <div className='w-full flex flex-col border border-green-13/80 dark:border-green-13/30 mb-[4.4rem]'>
          <div className='bg-green-14 dark:bg-green-14/[0.15] px-container-base lg:px-container-lg py-[1.5rem] text-[0.875rem] md:text-[1.375rem] text-black-5 dark:text-green-3 font-[500] leading-[0.75rem] md:leading-[1.25rem]'>
            Card Information
          </div>
          <div className='w-full flex flex-col'>
            {(
              [
                { title: 'Name:', value: 'Adeyemi Olabisi Racheal' },
                { title: 'Lassra ID:', value: 'LR071000485C' },
              ] as { title: string; value: string }[]
            )?.map((i, idx) => (
              <div
                key={idx}
                className={cn(
                  'w-full grid grid-cols-2 py-[2rem] px-container-base lg:px-container-lg text-black-6 dark:text-green-3',
                  idx !== 1 ? `border-b border-b-green-13/80 dark:border-b-green-13/30` : ``,
                )}
              >
                <p className='text-[0.75rem] md:text-[1rem]'>{i?.title}</p>
                <p className='text-[0.75rem] md:text-[1rem]'>{i?.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-between w-full max-w-[43.75rem] gap-[1.75rem] mx-auto'>
          <Button
            label='Relocate card'
            variant={'default'}
            themed={'theme1'}
            className='text-[0.875rem] md:text-[1rem]'
          />
          <Button
            label='Deliver card'
            variant={'naked'}
            className='text-[0.875rem] md:text-[1rem]'
          />
        </div>
      </div>
    </div>
  );
};

export default CardQuery;
