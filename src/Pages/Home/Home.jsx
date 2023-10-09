/* eslint-disable react/no-unescaped-entities */
import Banner from "../../assets/single-instructor-1.png"
import { PiFolderSimpleLockFill } from "react-icons/pi";
import { BiSupport, BiBookBookmark } from "react-icons/bi";
import About from "../../assets/about-pic.jpg";
import Events from "../../components/Events/Events";
const Home = () => {
    

    // console.log(events);
    return (
        <div>
            {/* banner section  */}
            <div className="bg-gradient-to-r from-cyan-200 to-white-500">
                <div className="flex flex-col md:flex-row p-2 md:w-11/12 mx-auto items-center">
                    <div id="banner-left-side">
                        <p className="text-orange-600 text-2xl font-bold">Start learning from home</p>
                        <h1 className="text-7xl font-extrabold py-2">Connect With Adam <br /> & start learning</h1>
                        <p className="text-xl font-bold">I'm highly experienced in web programming. I'm teaching online <br /> for about 20+ years. I can help you to improve your skill.</p>
                    </div>
                    <div id="banner-right-sides">
                        <img src={Banner} alt="banner" />
                    </div>
                </div>
            </div>
            {/* feature section  */}
            <h1 className="text-6xl font-bold text-center mt-4">Features</h1>
            <div className="flex flex-col md:flex-row gap-4 md:w-11/12 mx-auto justify-center py-7">
                <div className="card card-side bg-base-100 shadow-2xl">
                    <figure><PiFolderSimpleLockFill className="text-[300px] text-orange-600 px-3"></PiFolderSimpleLockFill></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life Time Access</h2>
                        <p> Gain unlimited access to course content, allowing you to learn at your own pace, revisit materials whenever you want, and stay up-to-date with the latest information. </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-2xl">
                    <figure><BiBookBookmark className="text-[300px] text-orange-600  px-3"></BiBookBookmark></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Free Course Materials </h2>
                        <p> Access a wealth of learning resources at no extra cost, including textbooks, study guides, and supplementary materials, enhancing your educational journey. </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-2xl">
                    <figure><BiSupport className="text-[300px] text-orange-600 px-3"></BiSupport></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Dedicated Support </h2>
                        <p> Benefit from personalized assistance and guidance from instructors and support staff throughout your learning process, ensuring you have the help you need to succeed. </p>
                    </div>
                </div>
            </div>
            {/* about me section  */}
            <div className="flex flex-col md:flex-row p-2 md:w-11/12 mx-auto items-center gap-10 py-10">
                <div id="about-left-side" className="basis-1/2">
                    <img className="rounded-lg" src={About} alt="about" />
                </div>
                <div id="about-right-side" className="basis-1/2">
                    <p className="text-orange-600 font-semibold text-xl">About Me</p>
                    <h1 className="text-4xl font-extrabold py-3">I'm teaching online for about 5+ years on programming</h1>
                    <p className="text-justify text-lg">A teacher is an educational professional who plays a pivotal role in shaping the knowledge, skills, and character of students. They possess a profound passion for their subject matter and a dedication to nurturing the intellectual and personal growth of their learners. Effective teachers employ a variety of teaching methods, adapt to the unique needs of each student, and serve as mentors, motivators, and sources of inspiration to encourage a lifelong love of learning.</p>
                </div>
            </div>
            {/* event section  */}
            <h1 className="text-center text-6xl font-bold py-4">UpComing Events</h1>
            <div className="w-11/12 mx-auto py-4">
                <Events></Events>
            </div>
        </div>
    );
};

export default Home;