import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import LoggedUserInfo from "../../components/LoogedUserInfo/LoggedUserInfo";
import toast from "react-hot-toast";


const Register = () => {
    const { signUpPassWord, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log("location in register", location);
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // if (loading) {
        //     return <div className="flex items-center justify-center h-screen"><span className="loading loading-bars loading-lg"></span></div>
        // }
        signUpPassWord(email, password)
            .then(result => {
                navigate(location?.state ? location.state : "/"),
                    toast.success('Successfully Login!', result)
            })

            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
        console.log(email, password);
    }
    return user ? <div className="flex items-center justify-center h-screen"><span className="loading loading-bars loading-lg"></span></div> : (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col">
                <h1 className="text-3xl font-bold">Register now!</h1>
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="email" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center py-2">Already Register? <Link className="text-blue-500 font-semibold" to="/login">Login</Link></p>
                </div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );
};

export default Register;