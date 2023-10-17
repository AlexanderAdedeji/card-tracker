import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import NotFound from './components/general/NotFound';

function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Routes>
        <Route path='notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
      </Routes>
    </>
  );
}

export default App;
