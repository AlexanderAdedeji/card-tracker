import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import NotFound from './components/general/NotFound';
import routes from './routes';
import AppLayout from './layout/app-layout';

function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Routes>
        {routes?.map((i, idx) => (
          <Route key={`${idx}-${i?.route}`} element={<AppLayout />}>
            <Route path={`/${i?.route}`} element={i?.element} />
          </Route>
        ))}
        <Route path='notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' replace />} />
      </Routes>
    </>
  );
}

export default App;
