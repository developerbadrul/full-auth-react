import { useContext } from "react";
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
const SocialSignIn = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext)
    return (
        <div className="text-center">
            <h2 className="text-gray-600 text-2xl font-semibold">Social Media Login</h2>
            <div className="text-3xl flex gap-4 justify-center">
                <button className="bg-white p-3 rounded-full hover:bg-sky-500" onClick={googleSignIn}><FaGooglePlusG></FaGooglePlusG></button>
                <button className="bg-white p-3 rounded-full hover:bg-sky-500" onClick={githubSignIn}><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialSignIn;