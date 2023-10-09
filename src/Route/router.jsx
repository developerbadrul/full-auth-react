import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../root";
import Courses from "../Pages/Courses/Courses";
import Webinars from "../Pages/Webinars/Webinars";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CoursesDetails from "../Pages/CoursesDetails/CoursesDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <PrivateRoute><Courses></Courses></PrivateRoute>
            },
            {
                path: "/courses/:id",
                element: <PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
                loader: () => fetch("/events.json")
            },
            {
                path: "/webinars",
                element: <Webinars></Webinars>
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