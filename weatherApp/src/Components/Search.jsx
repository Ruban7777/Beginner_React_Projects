const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="searchEngine">
      <input
        type="text"
        placeholder="Enter city name here"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
