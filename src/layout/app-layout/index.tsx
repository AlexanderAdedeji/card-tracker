import Nav from '@/components/partials/nav';
import { useOutlet } from 'react-router-dom';

const AppLayout = () => {
  const outlet = useOutlet();

  return (
    <div className='w-full h-full relative min-h-screen bg-white dark:bg-green-2'>
      <Nav />
      <main className='w-full h-full min-h-screen'>{outlet}</main>
    </div>
  );
};

export default AppLayout;
