import Webiner from "../../assets/webiner.jpg"
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { TbFreeRights } from "react-icons/tb";
const Webinars = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <h1 className="text-center font-semibold md:text-5xl py-5">Web Programming Career Guideline</h1>
                <img className="w-11/12 mx-auto mb-16" src={Webiner} alt="Webiner" />
                <div className="card hidden md:block w-9/12 bg-base-100 shadow-xl p-7 absolute left-0 right-0 mx-auto bottom-[-140px]">
                    <div className="flex justify-around">
                        <div className="flex text-4xl gap-4 items-center">
                            <p><BsFillCalendar2DateFill></BsFillCalendar2DateFill></p>
                            <p>20 Sep, 2023</p>
                        </div>
                        <div className="flex text-4xl gap-4 items-center">
                            <p><BiSolidTimeFive></BiSolidTimeFive></p>
                            <p>10:00 PM</p>
                        </div>
                        <div className="flex text-4xl gap-4 items-center">
                            <p><TbFreeRights></TbFreeRights></p>
                            <p>Free</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <h1 className="md:text-5xl font-semibold my-3">
                        About The Webinar
                    </h1>
                    <p className="text-justify">
                        The is a modern educational and communication tool that allows individuals, businesses, and organizations to host and participate in interactive online seminars, presentations, workshops, and events. Webinars offer the opportunity to connect with a global audience in real-time, making them a valuable platform for sharing knowledge, promoting products and services, and fostering collaboration.

                        Webinars typically feature a host or presenter who delivers content using a combination of audio, video, slides, and chat functionality. Participants can engage by asking questions, participating in polls, and networking with others. Webinars are widely used across various industries for purposes such as employee training, marketing, product demonstrations, academic lectures, and more. They provide a convenient and efficient way to share information and engage with an audience, regardless of geographical location.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Webinars;