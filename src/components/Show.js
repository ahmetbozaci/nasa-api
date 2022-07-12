import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dataIsFound from './Utils/dataIsFound';
import { getData, getAssets } from '../redux/API';

const Show = () => {
  const { allData } = useSelector((state) => state.nasaData);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getData(id));
    dispatch(getAssets(id));
  };

  return (
    <>
      {allData.length === 0 ? 'Not Found You can change the search criteria in the search bar or the search builder.' : allData && allData.map((item) => {
        const {
          title, location, photographer, nasa_id: id,
        } = item.data[0];
        const { href: link } = item.links[0];
        return (
          <div key={id}>
            <p>
              <b>TITLE: </b>
              {dataIsFound(title)}

            </p>
            <p>
              <b>LOCATION: </b>
              {dataIsFound(location)}

            </p>
            <p>
              <b>Photographer: </b>
              {dataIsFound(photographer)}
            </p>
            <Link to="/details" onClick={() => handleClick(id)}>
              <img alt={title} src={link} width="50%" />
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Show;
