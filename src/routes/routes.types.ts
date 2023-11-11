import { z } from 'zod';

export interface routeInterface {
  element: JSX.Element;
  route: routeTypes;
}

export const routeTypeEnums = z.enum([
  '',
  'card-query',
  'onboarding',
  'card-relocation',
  'card-delivery',
  'card-delivery',
]);

export type routeTypes = z.infer<typeof routeTypeEnums>;
