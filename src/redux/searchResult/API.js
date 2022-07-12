import { loadAllData, loadOneData, loadAssets } from './search';

const mainURL = 'https://images-api.nasa.gov/';

const getData = (searchText) => async (dispatch) => {
  const searchURL = `${mainURL}search?q=${searchText}`;
  const response = await fetch(searchURL);
  const data = await response.json();
  const { items } = data.collection;
  if (searchText.includes('media_type')) {
    dispatch(loadAllData(items));
  } else {
    dispatch(loadOneData(items));
  }
};

const getAssets = (searchText) => async (dispatch) => {
  const searchURL = `${mainURL}asset/${searchText}`;
  const response = await fetch(searchURL);
  const data = await response.json();
  const { items } = data.collection;
  dispatch(loadAssets(items));
};

export { getAssets, getData };
