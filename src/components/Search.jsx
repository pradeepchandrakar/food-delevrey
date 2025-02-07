import PropTypes from "prop-types";


function Search({ filterFunc, allRestaurants }) {
  function handleSearch(searchText) {
   const filteredRestaurants = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    filterFunc(filteredRestaurants);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search restaurants..."
        onChange={(e) => handleSearch(e.target.value)}
      />
     
    </>
  );
}

// ✅ Add PropTypes validation
Search.propTypes = {
  filterFunc: PropTypes.func.isRequired,
  allRestaurants: PropTypes.array.isRequired,
};

export default Search;


