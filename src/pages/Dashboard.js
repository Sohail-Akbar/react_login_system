import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/includes/Sidebar";
import Navbar from "../components/includes/Navbar";

import "../assets/css/style.css";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <header>
                <Sidebar />
                <Navbar />
            </header>
            <main style={{ marginTop: "58px" }}>
                <div className="container pt-4">
                    <h2>Dashboard</h2>
                    <p>Welcome, {user.email}</p>
                </div>
            </main>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
};

export default Dashboard;
