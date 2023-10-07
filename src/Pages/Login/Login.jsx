import { Link, useNavigate } from "react-router-dom";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import LoggedUserInfo from "../../components/LoogedUserInfo/LoggedUserInfo";




const Login = () => {
    const { signInPass, user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInPass(email, password)
            .then(result => console.log(result.user))
            .catch(err => console.log(err.message))

    navigate(`/dashboard`)
    }
    return user ? (
        <LoggedUserInfo></LoggedUserInfo>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center py-2">Already Register? <Link className="text-blue-500 font-semibold" to="/register">Register</Link></p>
                </div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );

};

export default Login;