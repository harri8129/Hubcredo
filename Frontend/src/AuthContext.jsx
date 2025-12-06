import React, { createContext, useContext, useState, useEffect } from "react";
import API from "./api";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [access, setAccess] = useState(localStorage.getItem("access") || null);
    const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || null);

    useEffect(() => {
        if (access) {
            API.get("/auth/me/")
                .then((res) => setUser(res.data))
                .catch(() => {
                    logout();
                });
        }
    }, [access]);

    const login = async (email, password) => {
        const res = await API.post("/auth/login/", { email, password });
        const { access, refresh } = res.data;
        setAccess(access);
        setRefresh(refresh);
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        // fetch current user
        const me = await API.get("/auth/me/");
        setUser(me.data);
    };

    const signup = async (email, password, username) => {
        await API.post("/auth/register/", { email, password, username });
        // after signup, you can either auto-login or redirect to login page
    };

    const logout = () => {
        setUser(null);
        setAccess(null);
        setRefresh(null);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    };

    return (
        <AuthContext.Provider value={{ user, access, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
