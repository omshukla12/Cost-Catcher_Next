
import './index.css'; // or './App.css' if that's where Tailwind is imported
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Signin from './pages/Signin';
import App from './pages/App';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";


const Applayout = () => {
  const [token, setToken] = useState(null); // Initialize token state here

  return (
    <div>
      {/* Pass setToken to children via context or props */}
      <Outlet context={{ setToken }} /> {/* Outlet provides access to setToken via context */}
    </div>
  );
};

// Define routes and pass setToken to Signin via Outlet context
const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/signin", element: <Signin /> }, // Signin will access setToken via Outlet context
      { path: "/app", element: <App /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
