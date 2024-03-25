export interface IRelocateCard {
  lasrra_id: string;
  destination_local_government: string;
  destination_collection_centre: string;
  source_local_government: string;
  source_collection_centre: string;
}

export interface IgetMaskedContactDetails {
  lasrra_id: string;
}

export interface IrequestOtp {
  lasrra_id: string;
  channel: string;
}

export interface IVerifyOtp {
  lasrra_id: string;
  code: string;
}
