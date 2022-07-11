import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData, getAssets } from '../redux/searchResult/API';

const Show = () => {
  const allData = useSelector((state) => state.nasaData.allData);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getData(id));
    dispatch(getAssets(id));
  };
  return (
    <div>

      {allData && allData.map((item) => (

        <div key={item.data[0].nasa_id}>
          <p>
            <b>title:</b>
            {item.data[0].title !== undefined ? item.data[0].title : 'Not found'}
          </p>
          <p>
            <b>location:</b>
            {item.data[0].location !== undefined ? item.data[0].location : 'Not found'}
          </p>
          <p>
            <b>Photographer&apos;s Name:</b>
            {item.data[0].photographer !== undefined ? item.data[0].photographer : 'Not found'}
          </p>
          <Link to="/details" props="something" onClick={() => handleClick(item.data[0].nasa_id)}>
            <img alt={item.data[0].title} src={item.links[0].href} width="50%" />
          </Link>

          <p>Show Details</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Show;
