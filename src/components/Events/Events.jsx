import { useEffect, useState } from "react";
import Event from "../Event/Event";

const Events = () => {
    const [events, setEvent] = useState(null);
    useEffect(() => {
        fetch("/events.json")
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                events?.map(event => <Event key={event.id} event={event}></Event>)
            }
        </div>
    );
};

export default Events;