import Events from "../../components/Events/Events";

const Courses = () => {
    return (
        <div>
            <h1 className="text-5xl py-5 text-center font-semibold">Upcoming Course/ Event</h1>
            <div className="w-11/12 mx-auto">
                <Events></Events>
            </div>
        </div>
    );
};

export default Courses;