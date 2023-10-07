/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import noUser from "../../assets/noUser.jpg";
import { useNavigate } from "react-router-dom";

const LoggedUserInfo = () => {
    const { user,  logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(console.log("successfull Logout"))
            .catch(console.log("logout Error"))
        navigate("/")
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user?.photoURL || noUser} className="max-w-sm md:min-w-[240px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{user.displayName || "No Name" }</h1>
                    <h1 className="text-2xl font-bold">Email: {user.email || "No Email" }</h1>
                    <h4 className="text-xl font-bold">Student ID: {user.uid || "No uid" }</h4>
                    <p className="py-6">My name is Hridoy, and I'm a dedicated student currently in the 10th grade. I'm passionate about my education and strive for academic excellence. In my free time, I enjoy exploring various subjects and hobbies. I'm determined to excel in my studies and work towards a bright future. I'm enthusiastic about learning and look forward to the opportunities that education will bring in my life.</p>
                    <button className="btn btn-error" onClick={handleLogOut}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default LoggedUserInfo;