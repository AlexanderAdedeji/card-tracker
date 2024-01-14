import API from '../index';
import { IRelocateCard, IVerifyOtp, IgetMaskedContactDetails, IrequestOtp } from './card.types';

const searchCard = async (params: { id: string }) => {
  try {
    const { data } = await API.get(`/card_tracker/card_management/search/${params?.id}`);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const relocateCard = async (params: IRelocateCard) => {
  try {
    const { data } = await API.post(`/card_tracker/card_management/relocate_card`, {
      ...params,
    });
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const getMaskedContactDetails = async (params: IgetMaskedContactDetails) => {
  try {
    const { data } = await API.get(
      `/card_tracker/card_management/get_masked_contact_details/${params.lasrra_id}`,
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const requestOtp = async (params: IrequestOtp) => {
  try {
    const { data } = await API.post(`/card_tracker/card_management/request_OTP`, {
      ...params,
    });
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const verifOtp = async (params: IVerifyOtp) => {
  try {
    const { data } = await API.post(`/card_tracker/card_management/verify_OTP`, {
      ...params,
    });
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const cardService = { searchCard, relocateCard, getMaskedContactDetails, requestOtp, verifOtp };

export default cardService;
