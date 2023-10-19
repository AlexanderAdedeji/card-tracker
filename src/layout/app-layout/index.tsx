import Nav from '@/components/partials/nav';
import React from 'react';
import { useOutlet } from 'react-router-dom';

const AppLayout = () => {
  const outlet = useOutlet();

  return (
    <div className='w-full h-full relative'>
      <Nav />
      <main>{outlet}</main>
    </div>
  );
};

export default AppLayout;
