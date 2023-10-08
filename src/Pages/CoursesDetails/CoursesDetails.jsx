import { useParams } from "react-router";

const CoursesDetails = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            course details for:{id}
        </div>
    );
};

export default CoursesDetails;