import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import dataIsFound from './Utils/dataIsFound';
import { getData, getAssets } from '../redux/API';

const Show = (props) => {
  const { errorText } = props;
  const { allData } = useSelector((state) => state.nasaData);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getData(id));
    dispatch(getAssets(id));
  };

  return (
    <Container>
      {allData.length === 0
        ? (
          <div className="text-center text-danger pt-5">
            <h4>{errorText}</h4>
          </div>
        )
        : allData && allData.map((item) => {
          const {
            title,
            location,
            photographer,
            nasa_id: id,
          } = item.data[0];
          const { href: link } = item.links[0];
          return (
            <Row key={id} className="my-4">
              <Col xs={12} md={5} className="">
                <Link to="/details" onClick={() => handleClick(id)}>
                  <Image
                    alt={title}
                    src={link}
                    width="400"
                    height="250"
                    fluid
                    rounded
                  />
                </Link>
              </Col>
              <Col className="m-auto"><h6>{dataIsFound(title)}</h6></Col>
              <Col className="m-auto">
                <b>Location: </b>
                <p>{dataIsFound(location)}</p>
              </Col>
              <Col className="m-auto">
                <b>Photographer: </b>
                <p>{dataIsFound(photographer)}</p>
              </Col>
            </Row>

          );
        })}
    </Container>
  );
};

Show.propTypes = {
  errorText: PropTypes.string,
};
Show.defaultProps = {
  errorText: '',
};

export default Show;
