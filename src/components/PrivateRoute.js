import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>; // optional: show loading while checking

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
