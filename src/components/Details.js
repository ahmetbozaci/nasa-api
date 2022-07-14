import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Image } from 'react-bootstrap';
import dataIsFound from './Utils/dataIsFound';

const Details = () => {
  const { oneData } = useSelector((state) => state.nasaData);
  const navigate = useNavigate();
  return (
    <div>
      <Button type="button" onClick={() => navigate(-1)} className="btn-warning">
        GO BACK
      </Button>

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
            <div key={id} className="text-center container">
              <h4>
                {dataIsFound(title)}
              </h4>
              {/* <p>
                <b>İMAGES</b>
                <img alt={item.data[0].title} src={pic[3]} width="50%" />
              </p> */}
              <figure className="mb-5">
                <Image
                  alt={title}
                  src={link}
                  fluid
                  rounded
                  thumbnail
                />
                <figcaption>
                  {' '}
                  <strong className="text-success">Photographer: </strong>
                  <span>{dataIsFound(photographer)}</span>
                </figcaption>
              </figure>
              <div className="mb-3">
                <strong className="text-success">Location: </strong>
                <span>{dataIsFound(location)}</span>
              </div>
              <div className="mb-3">
                <strong className="text-success">Description: </strong>
                <span className="text-muted">{dataIsFound(description)}</span>
              </div>
              <div className="mb-3">
                <strong className="text-success">Date Created: </strong>
                <span className="text-muted">{dataIsFound(date)}</span>
              </div>
              <div className="mb-3">
                <strong className="text-success">Keywords: </strong>
                <span className="text-muted">{keywords !== undefined ? keywords.join(', ') : 'Not found'}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
