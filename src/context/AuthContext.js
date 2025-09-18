import { createContext, useState, useEffect } from "react";
import { login as apiLogin, register as apiRegister } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // optional: track loading state

    // Load user from localStorage on mount
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) setUser(savedUser);
        setLoading(false);
    }, []);

    // LOGIN
    const login = async (email, password) => {
        try {
            const response = await apiLogin(email, password);
            if (response.status === "success") {
                setUser(response.data);
                localStorage.setItem("user", JSON.stringify(response.data));
                return { success: true };
            } else {
                return { success: false, message: response.message };
            }
        } catch (error) {
            return { success: false, message: error.message || "Login failed" };
        }
    };

    // REGISTER
    const register = async (username, email, password) => {
        try {
            const response = await apiRegister(username, email, password);
            if (response.status === "success") {
                return { success: true };
            } else {
                return { success: false, message: response.message };
            }
        } catch (error) {
            return { success: false, message: error.message || "Registration failed" };
        }
    };

    // LOGOUT
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
