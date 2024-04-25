import { useParams } from "react-router-dom";
import EventForm from "../Components/EventForm";
import { editEvent, getEventDetail } from "../Components/Client";
import { useEffect, useState } from "react";

const EditEvent = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getEventDetail(id);
            if (data) {
                console.log(data[0]);
                setEvent(data[0]);
            } else {
                console.error('Data is null');
            }
        }
        fetchData();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = e.target;
        editEvent( {
            id: id,
            name: eventData.eventName.value,
            description: eventData.eventDescription.value,
            street: eventData["street-address"].value,
            city: eventData.city.value,
            state: eventData.region.value,
            zip: eventData["postal-code"].value,
            date: eventData.eventDate.value,
            time: eventData.eventTime.value,
        });
    }

    return (
        <div className="w-full flex justify-center flex-col items-center mx-auto">
            <h1>Edit Event</h1>
            <EventForm id={id} handleSubmit={handleSubmit} event={event} />
        </div>
    );
};

export default EditEvent;