import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getData } from '../redux/searchResult/API';
import Show from './Show';

const Search = () => {
  const dispatch = useDispatch();
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
          max="2023"
          placeholder="The start year for results"
          name="yearStart"
          value={yearStart}
          onChange={handleChange}
        />
        <input
          type="number"
          min="1950"
          max="2023"
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
