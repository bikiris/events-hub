import EventCard from "../Components/EventCard";
import { getEvents } from "../Components/Client";
import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

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
    if (sortByCreatedTimeDesc) {
      sorted = [...filteredEvents].sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    } else {
      sorted = [...filteredEvents].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    }
    setSortByCreatedTimeDesc(!sortByCreatedTimeDesc);
    console.log(sortByCreatedTimeDesc);
    setFilteredEvents(sorted);
  };

  const handleSortByUpvotes = () => {
    let sorted;
    if (sortByUpvotesDesc) {
      sorted = [...filteredEvents].sort((a, b) => {
        return a.popularity - b.popularity;
      });
    } else {
      sorted = [...filteredEvents].sort((a, b) => {
        return b.popularity - a.popularity;
      });
    }
    setSortByUpvotesDesc(!sortByUpvotesDesc);
    setFilteredEvents(sorted);
  };

  return (
    <div className='w-full mx-auto max-w-7xl '>
      <div className='flex items-center gap-4 mx-8 my-4 flex-wrap md:flex-nowrap'>
        <form className='w-full flex gap-4' onSubmit={handleSearch}>
          <input
            type='text'
            name='keywords'
            placeholder='search events'
            className='border p-2 rounded w-full'
          />
          <button className='max-h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            search
          </button>
        </form>
        <button
          onClick={handleSortByCreatedTime}
          className='max-h-12 whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Sort by created time {sortByCreatedTimeDesc ? "↓" : "↑"}
        </button>
        <button
          onClick={handleSortByUpvotes}
          className='max-h-12 whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Sort by upvotes {sortByUpvotesDesc ? "↓" : "↑"}
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 mx-auto py-24 px-8'>
        {filteredEvents &&
          filteredEvents.map((event) => {
            const date =
              formatDistanceToNow(
                format(new Date(event.created_at), "MM/dd/yyyy HH:mm")
              ) + " ago";
            return (
              <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                created_at={date}
                upvotes={event.popularity}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Events;
