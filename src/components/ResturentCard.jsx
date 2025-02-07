import PropTypes from 'prop-types';

function ResturentCard(props) {
  const { name, rating, imageUrl, deliveryTime, cuisines } = props.resDetail;

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={name} height="200px" width="200px" />
      <h2>{name}</h2>
      <span>⭐ {rating}</span>
      <span>⏳ {deliveryTime} mins</span>
      <p>{cuisines}</p>
    </div>
  );
}

ResturentCard.propTypes = {
  resDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    cuisines: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResturentCard;
