import Landing from '../pages/landing';
import { routeInterface } from './routes.types';
import Onboarding from '@/pages/onboarding';
import CardQuery from '@/pages/card-query';
import RelocateCard from '@/pages/relocate-card';
import DeliverCard from '@/pages/deliver-card';

const routes: routeInterface[] = [
  {
    route: '',
    element: <Landing />,
  },
  { element: <Onboarding />, route: 'onboarding' },
  { element: <CardQuery />, route: 'card-query' },
  { element: <RelocateCard />, route: 'card-relocation' },
  { element: <DeliverCard />, route: 'card-delivery' },
];

export default routes;
