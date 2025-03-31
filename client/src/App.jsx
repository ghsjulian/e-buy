import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import myRoutes from "./Router";

const router = createBrowserRouter(myRoutes);
const App = () =>{
    return <RouterProvider router={router} />;
}

export default App;
