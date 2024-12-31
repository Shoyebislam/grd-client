import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Login/Login";
import Admin_dashboard from "../Admin_dashboard/Admin_dashboard";
import Researcher_dashboard from "../Researcher_dashboard/Researcher_dashboard";



const route = createBrowserRouter([
    {
        path : '/',
        element :<App></App>
    },
    {
        path : '/register',
        element : <App></App>
    },
    {
        path : '/login',
        element : <Login></Login>
    },
    {
        path : '/admin_dashboard',
        element : <Admin_dashboard></Admin_dashboard>
    },
    {
        path : '/researcher_dashboard',
        element : <Researcher_dashboard></Researcher_dashboard>
    }
    
])

export default route