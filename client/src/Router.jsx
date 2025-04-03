import { Navigate } from "react-router-dom";

import Login from "./login/Login"
// Import Admins Components...
import AdminLayouts from "./admin/layouts/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AddProduct from "./admin/pages/AddProduct";
import EditProduct from "./admin/pages/EditProduct";

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
            },
            {
                path: "/admin/add-product",
                element: <AddProduct />
            },
            {
                path: "/admin/edit-product",
                element: <EditProduct />
            }
        ]
    },
    {
       path : "/login",
       element : <Login/>
    }
];

export default myRoutes;
