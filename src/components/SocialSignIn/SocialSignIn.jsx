import { useContext } from "react";
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SocialSignIn = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : "/"),
                        toast.success("Successfully Login")
                }
            })

            .catch(err => {
                toast.error(err)
            })
    }
    const handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : "/"),
                        toast.success("Successfully Login")
                }
            })

            .catch(err => {
                toast.error(err)
            })
    }
    return (
        <div className="text-center">
            <h2 className="text-gray-600 text-2xl font-semibold">Social Media Login</h2>
            <div className="text-3xl flex gap-4 justify-center">
                <button className="bg-white p-3 rounded-full hover:bg-sky-500" onClick={handleGoogleSign}><FaGooglePlusG></FaGooglePlusG></button>
                <button className="bg-white p-3 rounded-full hover:bg-sky-500" onClick={handleGithubLogin}><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialSignIn;