import React from "react";
import { useApp } from "../contexts/AppContext";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtector = ({ children }) => {
    const { isLogin } = useApp();
    return <>{isLogin ? children : <Navigate to="/login" />}</>;
};

export default AdminProtector;
