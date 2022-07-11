import { loadAllData, loadOneData, loadPicData } from './search';

const mainURL = 'https://images-api.nasa.gov/search?q=';

const getData = (searchText) => async (dispatch) => {
  const searchURL = `${mainURL}${searchText}`;
  const response = await fetch(searchURL);
  const data = await response.json();
  const { items } = data.collection;
  if (searchText.includes('media_type')) {
    dispatch(loadAllData(items));
  } else {
    dispatch(loadOneData(items));
  }
};

const URL = 'https://images-api.nasa.gov/asset/';

const getAssets = (searchText) => async (dispatch) => {
  const searchURL = `${URL}${searchText}`;
  const response = await fetch(searchURL);
  const data = await response.json();
  const { items } = data.collection;
  dispatch(loadPicData(items));
};

export { getAssets, getData };
