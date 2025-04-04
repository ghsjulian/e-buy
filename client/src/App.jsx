import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import myRoutes from "./Router";
import AppProvider from "./contexts/AppContext"


const router = createBrowserRouter(myRoutes);
const App = () =>{
    return <AppProvider><RouterProvider router={router} /></AppProvider>;
}

export default App;
