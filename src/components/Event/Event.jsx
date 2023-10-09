import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Event = ({ event }) => {
    // console.log("event fount", event);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={event?.pic} alt="Event Pic" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {event.title}
                    <div className="badge badge-secondary"><span>Price: </span>{event.price}</div>
                </h2>
                <p>{event.description.slice(0, 100)}<>...</></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline font-semibold">Duration: {event.duration}</div>
                </div>
                <div className="card-actions justify-center">
                    <Link className="w-full block text-center" to={`/courses/${event.id}`}><button className="btn btn-primary">Explore Event</button></Link>
                </div>
            </div>
        </div>
    )
};

export default Event;