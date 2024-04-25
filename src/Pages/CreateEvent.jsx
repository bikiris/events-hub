import { createEvent } from "../Components/Client";
import EventForm from "../Components/EventForm";

const CreateEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const eventData = event.target;
    createEvent({
      name: eventData.eventName.value,
      description: eventData.eventDescription.value,
      street: eventData["street-address"].value,
      city: eventData.city.value,
      state: eventData.region.value,
      zip: eventData["postal-code"].value,
      date: eventData.eventDate.value,
      time: eventData.eventTime.value,
    });

    console.log(eventData);
  };

  return (
    <div>
      <h1>Create Event</h1>
        <EventForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateEvent;
