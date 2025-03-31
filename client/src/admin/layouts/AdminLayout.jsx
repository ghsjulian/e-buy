import React from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader"
import "../styles/admin.style.css"

const AdminLayout = () => {
  return (<>
    <AdminHeader />
                        <Outlet />
 </> )
}

export default AdminLayout