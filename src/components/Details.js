/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const oneData = useSelector((state) => state.nasaData.oneData);
  const assets = useSelector((state) => state.nasaData.assets);
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>go back</button>

      {oneData && oneData.map((item) => (

        <div key={item.data[0].nasa_id}>
          <p>
            <b>title:</b>
            {item.data[0].title !== undefined ? item.data[0].title : 'Not found'}
          </p>
          <p>
            <b>Photographer&apos;s Name:</b>
            {item.data[0].photographer !== undefined ? item.data[0].photographer : 'Not found'}
          </p>
          <p>
            <b>İMAGES</b>
            {item.data[0].date_created !== undefined ? item.data[0].date_created : 'Not found'}
            {/* <img alt={item.data[0].title} src={pic[3]} width="50%" /> */}
          </p>
          <img alt={item.data[0].title} src={item.links[0].href} width="50%" />
          <p>
            <b>Location:</b>
            {item.data[0].location !== undefined ? item.data[0].photographer : 'Not found'}
          </p>
          <p>
            <b>Description:</b>
            {item.data[0].description !== undefined ? item.data[0].description : 'Not found'}
          </p>
          <p>
            <b>Date Created:</b>
            {item.data[0].date_created !== undefined ? item.data[0].date_created : 'Not found'}
          </p>
          <p>
            <b>Keywords:</b>
            {item.data[0].keywords !== undefined ? item.data[0].keywords.join(', ') : 'Not found'}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Details;
