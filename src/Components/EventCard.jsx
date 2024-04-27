import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EventCard = ({ id = 0, name = "name", created_at = "", upvotes = 0 }) => {
  return (
    <Link to={"/events/" + id} className='bg-red-300 shadow-md rounded-lg p-4'>
      <p className='text-gray-600'>{created_at}</p>
      <h1 className='text-xl font-bold mb-2'>{name}</h1>

      <p className='text-gray-600'>Upvotes: {upvotes}</p>
    </Link>
  );
};

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
};

export default EventCard;
