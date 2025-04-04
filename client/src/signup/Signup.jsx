import React, { useState, useEffect, useRef } from "react";
import "../login/login.styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useApp } from "../contexts/AppContext";
import {NavLink } from "react-router-dom"

const Login = () => {
    const { API, login } = useApp();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const msgRef = useRef(null);
    const showMsg = (msg, type) => {
        if (type) {
            msgRef.current.setAttribute("class", "success");
            msgRef.current.textContent = msg;
        } else {
            msgRef.current.setAttribute("class", "error");
            msgRef.current.textContent = msg;
        }
        setTimeout(() => {
            msgRef.current.removeAttribute("class");
            msgRef.current.textContent = "";
        }, 3000);
    };
    const checkValidation = () => {
        if (name.trim() === "") {
            showMsg("Name is required !", false);
            return false;
        } else if (email.trim() === "") {
            showMsg("Email is required !", false);
            return false;
        } else if (password.trim() === "") {
            showMsg("Password is required !", false);
            return false;
        } else if (password.trim().length < 5) {
            showMsg("Password length will be 6 charecters !", false);
            return false;
        } else {
            return true;
        }
    };
    const submitData = async () => {
        if (!checkValidation()) return;
        setLoading(true);
        try {
            const request = await fetch(`${API}/user/signup`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            const response = await request.json();
            console.log(response);
            setLoading(false);
            showMsg(response.msg, response.success);
            localStorage.setItem("user", JSON.stringify(response.user));
            setTimeout(() => {
                login(response.user);
            }, 3000);
        } catch (error) {
            showMsg(error.message, false);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="full-page">
            <div className="login-container">
                <h3>Create New Account</h3>
                <span ref={msgRef}></span>
                <input
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    placeholder="Enter User Name"
                />
                <input
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    placeholder="Enter Email Address"
                />
                <input
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                />
                <button onClick={submitData} className="login-btn">
                    {loading && <div className="loader"></div>}
                    <span>{loading ? "Processing..." : "Register Now"}</span>
                    <FaArrowRightLong />
                </button>
                <NavLink to="/login">Login Now</NavLink>
            </div>
        </div>
    );
};

export default Login;
