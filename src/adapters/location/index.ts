import API from '../index';

const getLocalGoverments = async () => {
  try {
    const { data } = await API.get(`/card_tracker/location/local_governments`);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const getCollectionCenterByLga = async (params: { lag_code?: string }) => {
  try {
    const { data } = await API.get(
      `/card_tracker/location/get_local_government_collection_centers/${params?.lag_code}`,
      {
        params: {
          ...params,
        },
      },
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const locationService = { getLocalGoverments, getCollectionCenterByLga };

export default locationService;
