import { Navigate } from "react-router-dom";

// Import Admins Components...
import AdminLayouts from "./admin/layouts/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";

const myRoutes = [
    {
        path: "/",
        element: <h2>Home Page</h2>,
        children: []
    },
    {
        path: "/admin",
        element: <AdminLayouts />,
        children: [
            {
                path: "/admin",
                element: <AdminDashboard />
            },
            {
                path: "/admin/dashboard",
                element: <AdminDashboard />
            }
        ]
    }
];

export default myRoutes;
