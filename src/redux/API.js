import { loadData } from './nasa';

const mainURL = 'https://images-api.nasa.gov/search?q=';

const getData = (searchText) => async (dispatch) => {
  const searchURL = `${mainURL}${searchText}&media_type=image`;
  console.log(searchURL);
  const response = await fetch(searchURL);
  const data = await response.json();
  const { items } = data.collection;
  dispatch(loadData(items));
};

export default getData;
