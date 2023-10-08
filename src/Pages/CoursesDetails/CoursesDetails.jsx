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
        <div className="grid grid-cols-3 mx-auto w-11/12 gap-4 py-6 space-y-4">
            <div id="show-details-left" className="col-span-2">
                {/* course details  */}
                <div className="tabs">
                    <a className="tab tab-lg tab-lifted tab-active font-semibold py-4">Event Detail</a>
                </div>
                <div>
                    <h2 className="text-2xl text-orange-600 font-bold py-5">{showDetails.title}</h2>
                    <p className="text-justify">{showDetails.description}</p>
                    <div>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" checked="checked" />
                                <div className="collapse-title text-xl font-medium">
                                    Event Module
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-disc">
                                        {
                                            showDetails.course_content.map((content, idx) => <li key={idx}>{content}</li>)
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
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* course matarial section  */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;