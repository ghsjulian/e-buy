import React, { useState, useEffect, useRef } from "react";
import "./login.styles.css";

const Login = () => {
    return (
        <div className="full-page">
            <div className="login-container">
                <h3>Login Now</h3>
                <span id="msg"></span>
                <input type="email" placeholder="Enter Email Address" />
                <input type="password" placeholder="Enter Password" />
                <button className="login-btn">
                <div className="loader"></div>
                <span>Login Now</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
