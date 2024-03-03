import {Navigate, createBrowserRouter} from "react-router-dom";

//layouts
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordV from "./pages/ResetPasswordV";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/home',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <SignIn />
            },
            {
                path: '/register',
                element: <SignUp />
            },
            {
                path: '/reset_password',
                element: <ResetPassword />
            },
            {
                path: '/update_password',
                element:<ResetPasswordV />
            }

        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;