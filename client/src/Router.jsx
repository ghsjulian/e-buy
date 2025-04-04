import { Navigate } from "react-router-dom";
import LoginProtector from "./auth/LoginProtector";
import AdminProtector from "./auth/AdminProtector";
import Login from "./login/Login";
import Signup from "./signup/Signup";
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
        element: (
            <AdminProtector>
                <AdminLayouts />
            </AdminProtector>
        ),
        children: [
            {
                path: "/admin",
                element: (
                    <AdminProtector>
                        <AdminDashboard />
                    </AdminProtector>
                )
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
        path: "/login",
        element: <LoginProtector><Login /></LoginProtector>
    },
    {
        path: "/signup",
        element: <LoginProtector><Signup /></LoginProtector>
    }
];

export default myRoutes;
