import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState
} from "react";
import { Navigate } from "react-router-dom";

const getToken = () => {
    return localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;
};

const initialState = {
    isLogin: getToken()? true:false,
    user: getToken()
};
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true,
                user: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                isLogin: false,
                user: null
            };
        default:
            return state;
    }
};

// Create context
const AppContext = createContext();

// Custom hook
export const useApp = () => {
    return useContext(AppContext);
};

// AuthProvider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const isLogin = state.isLogin;
    const user = state.user;
    const API = import.meta.env.VITE_API;

    const login = token => {
        dispatch({ type: "LOGIN", payload: token });
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AppContext.Provider
            value={{ state, login, logout, API, isLogin, user }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
