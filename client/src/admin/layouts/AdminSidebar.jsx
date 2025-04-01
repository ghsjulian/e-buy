import React from "react";
import { NavLink } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineCollection } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaBorderNone } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineWhatsapp } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";



const AdminSidebar = () => {
    return (
        <div className="admin-menu-list">
            <NavLink to="/admin">
                <div className="icon">
                    <MdOutlineDashboardCustomize />
                </div>
                <span>Admin Dashboard</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <FaBorderNone />
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
                    <IoBagAddOutline />
                </div>
                <span>Add Product</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <HiOutlineCollection />
                </div>
                <span>View Collections</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <CiDeliveryTruck />
                </div>
                <span>View Deliveries</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <MdOutlineCategory />
                </div>
                <span>Create Categories</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <GoGear />
                </div>
                <span>Settings</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <MdInfoOutline />
                </div>
                <span>About US</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <MdOutlineWhatsapp />
                </div>
                <span>Contact US</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <LuChartNoAxesCombined />
                </div>
                <span>Report US</span>
            </NavLink>
            <NavLink to="/admin">
                <div className="icon">
                    <MdOutlinePrivacyTip />
                </div>
                <span>Privacy & Policy</span>
            </NavLink>
        </div>
    );
};

export default AdminSidebar;
