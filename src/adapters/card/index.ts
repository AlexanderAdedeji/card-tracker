import API from '../index';

const searchCard = async (params: { id: string }) => {
  try {
    const { data } = await API.get(`/card_tracker/card_management/search/${params?.id}`);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const cardService = { searchCard };

export default cardService;
