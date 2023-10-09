import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-2xl md:text-5xl text-center text-red-500 font-semibold flex flex-col justify-center items-center">
            <h1>Page Not Found</h1>
            <Link to="/"><button className="btn btn-primary">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;