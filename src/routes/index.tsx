import Landing from '@/pages/landing';
import { routeInterface } from './routes.types';
import Onboarding from '@/pages/onboarding';
import CardQuery from '@/pages/card-query';

const routes: routeInterface[] = [
  {
    route: '',
    element: <Landing />,
  },
  { element: <Onboarding />, route: 'onboarding' },
  { element: <CardQuery />, route: 'card-query' },
];

export default routes;
