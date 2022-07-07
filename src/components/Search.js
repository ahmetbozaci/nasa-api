/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import getData from '../redux/API';

const Search = () => {
  const nasa = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    yearStart: '',
    yearEnd: '',
  });

  const { name, yearStart, yearEnd } = state;

  const changeSearchText = () => {
    const nameLower = name.toLowerCase();
    let searchText = '';
    if (yearStart !== '' && yearEnd !== '') {
      searchText = `${nameLower}%${yearStart}%${yearEnd}`;
    } else if (yearStart !== '' && yearEnd === '') {
      searchText = `${nameLower}%${yearStart}`;
    } else if (yearStart === '' && yearEnd !== '') {
      searchText = `${nameLower}%${yearEnd}`;
    } else {
      searchText = `${nameLower}`;
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
    </div>
  );
};

export default Search;
