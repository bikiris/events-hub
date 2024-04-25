import EventCard from "../Components/EventCard";
import { getEvents } from "../Components/Client";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [sortByUpvotesDesc, setSortByUpvotesDesc] = useState(false);
  const [sortByCreatedTimeDesc, setSortByCreatedTimeDesc] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents();
      console.log(data);
      setEvents(data);
      setFilteredEvents(data);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const { keywords } = e.target.elements;
    const filtered = events.filter((event) => {
      return event.name.toLowerCase().includes(keywords.value.toLowerCase());
    });
    setFilteredEvents(filtered);
  };

  const handleSortByCreatedTime = () => {
    let sorted;
    if(sortByCreatedTimeDesc) {
        sorted = [...filteredEvents].sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
        });
    }else{
        sorted = [...filteredEvents].sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
        });
    }
    setSortByCreatedTimeDesc(!sortByCreatedTimeDesc);
    console.log(sortByCreatedTimeDesc)
    setFilteredEvents(sorted);
  }

  const handleSortByUpvotes = () => {
    let sorted;
    if(sortByUpvotesDesc) {
        sorted = [...filteredEvents].sort((a, b) => {
            return a.popularity - b.popularity;
        });
    }else{
        sorted = [...filteredEvents].sort((a, b) => {
            return b.popularity - a.popularity;
        });
    }
    setSortByUpvotesDesc(!sortByUpvotesDesc);   
    setFilteredEvents(sorted);
  }

  return (
    <div>
      <form className='w-full mb-4 flex' onSubmit={handleSearch}>
        <input
          type='text'
          name='keywords'
          placeholder='search events'
          className='border p-2 rounded mb-2 w-full'
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white fonr-bold py-2 px-4 rounded'>
          search
        </button>
      </form>
      <button onClick={handleSortByCreatedTime} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
        Sort by created time
      </button>
      <button onClick={handleSortByUpvotes} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
        Sort by upvotes
      </button>
      <div className='grid grid-cols-4 w-full gap-4 mx-auto py-24 px-8'>
        {filteredEvents &&
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              description={event.description}
              upvotes={event.popularity}
            />
          ))}
      </div>
    </div>
  );
};

export default Events;
