/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { getData } from '../redux/API';
import Show from './Show';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: '',
    yearStart: '',
    yearEnd: '',
  });

  const { name, yearStart, yearEnd } = state;

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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="">
      <div className="d-flex justify-content-center mb-5">
        <Form onSubmit={handleSubmit} className="d-flex">
          <Input
            placeholder="Text search"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="mx-2"
          />
          <Input
            type="number"
            min="1950"
            max="2023"
            placeholder="Start year for result"
            name="yearStart"
            value={yearStart}
            onChange={handleChange}
            className="mx-2"
          />
          <Input
            type="number"
            min="1950"
            max="2023"
            placeholder="End year for result"
            name="yearEnd"
            value={yearEnd}
            onChange={handleChange}
            className="mx-2"
          />
          <Button type="submit" className="">Search</Button>
        </Form>
      </div>
      <Show />
    </div>
  );
};
export default Search;
