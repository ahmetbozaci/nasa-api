import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import dataIsFound from './Utils/dataIsFound';
import assetIsFound from './Utils/assetIsFound';

const Details = () => {
  const { oneData, assets } = useSelector((state) => state.nasaData);
  const navigate = useNavigate();

  return (
    <Container>
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
            <div key={id} className="text-sm-center">
              <h4>
                {dataIsFound(title)}
              </h4>
              <figure>
                {assetIsFound(assets, title, link)}
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
      <Button type="button" onClick={() => navigate(-1)} className="btn-warning mb-2">
        BACK TO THE SEARCH PAGE
      </Button>
    </Container>
  );
};

export default Details;
