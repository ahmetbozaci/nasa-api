import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  Button, Container, Form, Input,
} from 'reactstrap';
import { getData } from '../redux/API';
import Show from './Show';

const Search = () => {
  const { allData } = useSelector((state) => state.nasaData);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    yearStart: '',
    yearEnd: '',
    errorText: <h4>Fill the inputs and click the search button to see the results</h4>,
  });

  const {
    name, yearStart, yearEnd, errorText,
  } = state;

  const changeSearchText = () => {
    const nameLower = name.toLowerCase();
    let searchText = '&media_type=image';
    if (yearStart !== '' && yearEnd !== '') {
      searchText = `${nameLower}%${yearStart}%${yearEnd}${searchText}`;
    } else if (yearStart !== '' && yearEnd === '') {
      searchText = `${nameLower}%${yearStart}${searchText}`;
    } else if (yearStart === '' && yearEnd !== '') {
      searchText = `${nameLower}%${yearEnd}${searchText}`;
    } else {
      searchText = `${nameLower}${searchText}`;
    }
    return searchText;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getData(changeSearchText()));
    if (allData.length === 0) {
      setState({
        ...state,
        errorText:
  <div>
    <h4>Data Not Found</h4>
    <h4>Please change the search criteria</h4>
    {' '}

  </div>,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="">
      <Container className="">
        <Form onSubmit={handleSubmit} className="d-sm-flex">
          <Input
            placeholder="Text search"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="mb-2 mb-sm-0 mx-sm-1"
          />
          <Input
            type="number"
            min="1950"
            max="2023"
            placeholder="Start year for result"
            name="yearStart"
            value={yearStart}
            onChange={handleChange}
            className="mb-2 mb-sm-0 mx-sm-1"
          />
          <Input
            type="number"
            min="1950"
            max="2023"
            placeholder="End year for result"
            name="yearEnd"
            value={yearEnd}
            onChange={handleChange}
            className="mb-2 mb-sm-0 mx-sm-1"
          />
          <Button type="submit" className="btn-info mx-sm-1">Search</Button>
        </Form>
      </Container>
      <Show errorText={errorText} />
    </div>
  );
};
export default Search;
