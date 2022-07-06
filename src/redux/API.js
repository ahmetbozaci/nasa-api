import { loadData } from './nasa';

const URL = 'https://images-api.nasa.gov/search?q=apollo';

const getData = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  const { items } = data.collection;

  const imageData = [];
  items.forEach((item) => {
    if (item.data[0].media_type === 'image') {
      imageData.push(item);
    }
  });
  dispatch(loadData(imageData));

};


export default getData;
