import API from '../index';
import { IRelocateCard } from './card.types';

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

const cardService = { searchCard, relocateCard };

export default cardService;
