import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EventCard = ({ id = 0, name = "name", created_at = "", upvotes = 0 }) => {
  return (
    <Link to={"/events/" + id} className='bg-[#457B9D] shadow-md rounded-lg p-4 hover:bg-[#356B8D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
      <p className='text-[#F1FAEE]'>{created_at}</p>
      <h1 className='text-xl text-[#F1FAEE] font-bold mb-2'>{name}</h1>

      <p className='text-[#F1FAEE]'>Upvotes: {upvotes}</p>
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
