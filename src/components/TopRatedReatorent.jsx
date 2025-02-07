import PropTypes from 'prop-types';


function TopRatedRestorents(props){

  function handleTopRated(){
    props.topRatedFunc();
  }
  return(
    <>
    <button onClick={handleTopRated} >To Rated Restorent</button>
     </>
  )
}

TopRatedRestorents.propTypes = {
  topRatedFunc: PropTypes.func.isRequired, // Ensures topRatedFunc is a function and required
};

export default TopRatedRestorents;