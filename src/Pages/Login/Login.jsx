import { useLocation, useNavigate, Link } from "react-router-dom";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import LoggedUserInfo from "../../components/LoogedUserInfo/LoggedUserInfo";
import toast from 'react-hot-toast';


// const notify = () => toast('Here is your toast.');
const Login = () => {
    const { signInPass, user, loading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log("path name in login", location);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (loading) {
            return <div className="flex items-center justify-center h-screen"><span className="loading loading-bars loading-lg"></span></div>
        }

        signInPass(email, password)
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : "/");
                    toast.success('Successfully Login!')
                }
            })

            .catch(err => {
                if (err) {
                    console.log(err.message);
                    toast.error(err.message);
                }

            })

    }
    return user ? (
        <div className="flex items-center justify-center h-screen"><span className="loading loading-bars loading-lg"></span></div>

    ) : (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col">
                <h1 className="text-3xl font-bold">Login now!</h1>
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                    <p className="text-center py-2">Already Register? <Link state={location.state} to="/register" className="text-blue-500 font-semibold" >Register</Link></p>
                </div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );

};

export default Login;