import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dataIsFound from './Utils/dataIsFound';

const Details = () => {
  const { oneData } = useSelector((state) => state.nasaData);
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>

      {oneData
        && oneData.map((item) => {
          const {
            title,
            location,
            photographer,
            nasa_id: id,
            description,
            date_created: date,
            keywords,
          } = item.data[0];
          const { href: link } = item.links[0];
          return (
            <div key={id}>
              <p>
                <b>title:</b>
                {dataIsFound(title)}
              </p>
              <p>
                <b>Photographer&apos;s Name:</b>
                {dataIsFound(photographer)}
              </p>
              <p>
                <b>İMAGES</b>
                {/* <img alt={item.data[0].title} src={pic[3]} width="50%" /> */}
              </p>
              <img
                alt={title}
                src={link}
                width="50%"
              />
              <p>
                <b>Location:</b>
                {dataIsFound(location)}
              </p>
              <p>
                <b>Description:</b>
                {dataIsFound(description)}
              </p>
              <p>
                <b>Date Created:</b>
                {dataIsFound(date)}
              </p>
              <p>
                <b>Keywords:</b>
                {keywords !== undefined ? keywords.join(', ') : 'Not found'}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
