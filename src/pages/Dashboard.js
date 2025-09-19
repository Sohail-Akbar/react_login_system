import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/includes/Sidebar";
import Navbar from "../components/includes/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../assets/css/style.css";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        toast.success("Login Successful 🎉");
        // Simulate API delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <header>
                <Sidebar />
                <Navbar />
            </header>
            <main style={{ marginTop: "58px" }}>
                <div className="container pt-4">
                    {loading ? (
                        <>
                            <h2>
                                <Skeleton width={200} height={30} />
                            </h2>
                            <p>
                                <Skeleton count={2} />
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>Dashboard</h2>
                            <p>Welcome, {user?.email}</p>
                        </>
                    )}
                </div>
            </main>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
};

export default Dashboard;
