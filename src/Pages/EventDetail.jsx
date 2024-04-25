import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventDetail, upvoteEvent } from "../Components/Client";
import Comments from "../Components/Comments";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [upvote, setUpvote] = useState(null);

  const fetchData = async () => {
    const data = await getEventDetail(id);
    if (data) {
      console.log(data[0]);
      setEvent(data[0]);
      setUpvote(data[0].popularity);
    } else {
      console.error("Data is null");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleUpvote = async () => {
    await upvoteEvent(id);
    fetchData();
  };

  return (
    <div className='p-4'>
      {event && (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4'>
          <div className='md:flex'>
            <div className='md:flex-shrink-0'>
              {/* You can put an image here */}
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                Event Detail
              </div>
              <h1 className='block mt-1 text-lg leading-tight font-medium text-black'>
                {event.name}
              </h1>
              <p className='mt-2 text-gray-500'>{event.description}</p>
              <p className='mt-2 text-gray-500'>{event.street}</p>
              <p className='mt-2 text-gray-500'>
                {event.city}, {event.state} {event.zip}
              </p>
              <p className='mt-2 text-gray-500'>{event.datetime}</p>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleUpvote}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Upvote: {upvote}
      </button>
      <Link
        to={`/edit/${id}`}
        className='ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        Edit
      </Link>
      <Comments id={id} />
    </div>
  );
};

export default EventDetail;
