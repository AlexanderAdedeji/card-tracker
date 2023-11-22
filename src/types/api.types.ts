export interface searchCardApiInterface {
  lasrra_id: string;
  first_name: string;
  last_name: string;
  registration_status: string;
  replacement_id: any;
  card_status: string;
  collection_center: string;
  local_government: string;
  isDelivered: boolean;
  requires_validation: boolean;
  requires_recapture: boolean;
  has_data_errors: boolean;
}

export interface lgaApiInterface {
  name: string;
  created_at: string;
  updated_at: string | null;
  id: number;
  code: string;
}

export interface collectionCenterInterface {
  id: number;
  code: string;
  local_govt_code: string;
  updated_at: any;
  name: string;
  created_at: string;
}
