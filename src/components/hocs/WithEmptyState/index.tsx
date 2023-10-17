interface IWithEmptyState {
  isEmpty: boolean;
  emptyStateIcon: JSX.Element;
  emptyStateDescription: string;
  emptyStateActionLabel: string;
  emptyStateAction: () => void;
  children: React.ReactNode;
}

const WithEmptyState = ({
  emptyStateAction,
  emptyStateActionLabel,
  emptyStateDescription,
  emptyStateIcon,
  isEmpty,
  children,
}: IWithEmptyState) => {
  return isEmpty ? (
    <div className='w-full h-full flex-grow flex flex-col items-center justify-center pt-[2.5rem]'>
      <div className='grid overflow-hidden w-full place-items-center'>{emptyStateIcon}</div>
      <p className='font-[500] text-blue-3/90 leading-[1.3125rem] tracking-[0.01rem] text-center pt-[1.88rem] pb-[1.06rem] max-w-[31rem]'>
        {emptyStateDescription}
      </p>
      <button
        onClick={() => emptyStateAction()}
        className='py-[0.38rem] px-[0.75rem] whitespace-nowrap uppercase font-[500] text-blue-3/90 tracking-[0.0525rem] rounded-[0.25rem] border border-black hover:border-green-1 hover:bg-green-1/10 transition-colors ease-in-out duration-300'
      >
        {emptyStateActionLabel}
      </button>
    </div>
  ) : (
    <>{children}</>
  );
};

export default WithEmptyState;
