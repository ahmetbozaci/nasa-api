import { useSelector } from 'react-redux';


const Search = () => {
  const nasa = useSelector((state) => state);

  return (
    <div>
      <p>Search</p>
    </div>
  );
};

export default Search;