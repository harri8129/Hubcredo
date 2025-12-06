// src/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

const PrivateRoute = ({ children }) => {
    const { access } = useAuth();
    if (!access) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;
