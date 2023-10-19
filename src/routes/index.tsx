import Landing from '@/pages/landing';
import { routeInterface } from './routes.types';
import Onboarding from '@/pages/onboarding';

const routes: routeInterface[] = [
  {
    route: '',
    element: <Landing />,
  },
  { element: <Onboarding />, route: 'onboarding' },
];

export default routes;
