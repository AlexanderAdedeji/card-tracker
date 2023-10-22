// import CommonGreenBtn from 'components/general/Btns/CommonGreenBtn';
import ReactLoading from 'react-loading';
// import Icon from 'utils/Icon';

interface IWithLoadingState {
  isLoading: boolean;
  isErrored?: boolean;
  loadingDescription?: string;
  refreshAction?: () => void;
  children: React.ReactNode;
}

const WithLoadingState = ({
  isErrored,
  isLoading,
  loadingDescription,
  refreshAction,
  children,
}: IWithLoadingState) => {
  return isLoading ? (
    <div className='w-full h-full flex-grow flex flex-col items-center justify-center pt-[2.5rem] gap-4'>
      <ReactLoading type='cylon' color='#07BEB8' />
      <span className='text-[18px] font-[600]'>{loadingDescription}</span>
    </div>
  ) : isErrored ? (
    <div className='w-full h-full flex-grow flex flex-col items-center justify-center pt-[2.5rem] gap-4'>
      {/* <Icon name='exclamation' svgProp={{ className: 'text-green-1/70 w-[7rem] h-[7rem]' }} /> */}
      <span className='text-[18px] font-[500] text-blue-1/[0.87]'>An Error Occured</span>
      {/* <CommonGreenBtn
        label='Refresh'
        className={`max-w-[15rem] ${!refreshAction ? `hidden` : ``}`}
        onClick={() => refreshAction?.()}
      /> */}
    </div>
  ) : (
    <>{children}</>
  );
};

export default WithLoadingState;
