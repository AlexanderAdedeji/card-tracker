import Icon from '@/lib/icon';

const Landing = () => {
  return (
    <div className='w-full h-full relative pt-[5.44rem]  md:pt-[11.19rem] flex flex-col overflow-x-hidden'>
      <div className='fixed top-0 right-0 w-full hidden lg:block'>
        <Icon name='landingMask' svgProp={{ className: 'mx-auto' }} />
      </div>
      <div className='w-full'></div>
      <div></div>
    </div>
  );
};

export default Landing;
