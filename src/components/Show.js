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

  const dataIsFound = (text) => (text !== undefined ? text : <b>Not Found</b>);

  return (
    <>
      {allData && allData.map((item) => {
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
            <Link to="/details" props="something" onClick={() => handleClick(id)}>
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
