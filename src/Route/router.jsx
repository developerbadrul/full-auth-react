import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../root";
import Courses from "../Pages/Courses/Courses";
import Webinars from "../Pages/Webinars/Webinars";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CoursesDetails from "../Pages/CoursesDetails/CoursesDetails";
import PrivateRoute from "./PrivateRoute";

const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/courses/:id",
                element: <PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
                loader: ()=> fetch("/events.json")
            },
            {
                path: "/webinars",
                element: <Webinars></Webinars>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
        ]
    }
])


export default myRoute;