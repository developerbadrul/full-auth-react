import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";

const CoursesDetails = () => {
    const [showDetails, setShowDetails] = useState([])
    const { id } = useParams();
    const getCourseData = useLoaderData();
    useEffect(() => {
        const findDetails = getCourseData.find(event => event.id == id)
        setShowDetails(findDetails)
    }, [getCourseData, id])
     
    console.log("getID", id, "get Data", getCourseData);

    console.log("show details", showDetails);
    return (
        <div className="grid md:grid-cols-3 px-6 max-w-full mx-auto md:w-11/12 gap-4 py-6 space-y-4">
            <div id="show-details-left" className="md:col-span-2">
                {/* course details  */}
                <div className="tabs">
                    <a className="tab tab-lg tab-lifted tab-active font-semibold py-4">Event Details</a>
                </div>
                <div>
                    <h2 className="text-2xl text-orange-600 font-bold py-5">{showDetails.title}</h2>
                    <p className="text-justify">{showDetails.description}</p>
                    <div>
                        <div className="join join-vertical w-full py-5">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked="checked" />
                                <div className="collapse-title text-xl font-semibold  text-orange-500">
                                    Event Module
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-disc list-outside ml-5 font-semibold">
                                        {
                                            showDetails?.course_content?.map((content, idx) => <li key={idx}>{content}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="show-details-right" className="col-span-1">
                {/* course img section  */}
                <div className="card md:w-96 bg-base-100 shadow-xl my-5">
                    <figure><img src={showDetails.pic} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{showDetails.title}</h2>
                        <p className="text-xl">Price: {showDetails.price}</p>
                        <div className="card-actions">
                            <button className="btn bg-orange-500 text-white w-full block">Enroll Now</button>
                        </div>
                    </div>
                </div>

                {/* course matarial section  */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Material Includes</h2>
                        <ul className="list-decimal list-outside ml-4">
                            {
                                showDetails?.event_materials?.map((material, idx)=> <li key={idx}>{material}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;