export interface routeInterface {
  element: JSX.Element;
  route: routeTypes;
}

export type routeTypes = '' | 'card-query' | 'onboarding' | 'card-relocation' | 'card-delivery';
