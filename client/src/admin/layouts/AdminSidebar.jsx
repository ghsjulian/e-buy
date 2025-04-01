import React from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

const AdminSidebar = () => {
    return (
        <div className="admin-menu-list">
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Admin Dashboard</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Total Orders</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>View Products</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Add Product</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>View Collections</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>View Deliveries</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Create Categories</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Settings</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>About US</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Contact US</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Report US</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <BsHandbag />
                </div>
                <span>Privacy & Policy</span>
            </NavLink>
        </div>
    );
};

export default AdminSidebar;
