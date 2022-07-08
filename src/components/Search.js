/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getData from '../redux/searchResult/API';
import Show from './Show';

const Search = () => {
  const nasa = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    yearStart: '',
    yearEnd: '',
  });

  const { name, yearStart, yearEnd } = state;

  // useEffect(() => {
  //   navigate('/doctors');
  // });

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Text search"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="1950"
          placeholder="The start year for results"
          name="yearStart"
          value={yearStart}
          onChange={handleChange}
        />
        <input
          type="number"
          min="1950"
          placeholder="The end year for results"
          name="yearEnd"
          value={yearEnd}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Show />
    </div>
  );
};

export default Search;
