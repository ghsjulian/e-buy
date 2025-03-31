import { Navigate } from "react-router-dom";

// Import Admins Components...
import AdminLayouts from "./admin/layouts/AdminLayout"

const myRoutes = [
    {
        path: "/",
        element: <h2>Home Page</h2>,
        children: []
    },
    {
        path: "/admin",
        element: <AdminLayouts/>,
        children: [
            {
                path: "/admin/login",
                element: <h2>Admin Login Page</h2>
            }
        ]
    }
];

export default myRoutes;
