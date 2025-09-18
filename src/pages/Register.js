import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { sAlert } from "../utils/Functions";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/login.css"; // same gradient styles



const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { register, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }

    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!username.trim()) {
            setError("Username is required");
            sAlert("error", "Username is required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            sAlert("error", "Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const result = await register(username, email, password);
            if (result.success) {
                sAlert("success", "Registration Successfully");
                navigate("/login");
            } else {
                setError(result.message || "Registration failed");
                sAlert("error", result.message || "Registration failed");
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
            sAlert("error", "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
            <MDBContainer>
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol xl="10">
                        <MDBCard className="rounded-3 text-black">
                            <MDBRow className="g-0">
                                {/* Left Form */}
                                <MDBCol lg="6">
                                    <MDBCardBody className="p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                style={{ width: "185px" }}
                                                alt="logo"
                                            />
                                            <h4 className="mt-1 mb-5 pb-1">Create Your Account</h4>
                                        </div>

                                        {error && (
                                            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                                        )}

                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <MDBInput
                                                    label="Username"
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    size="lg"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <MDBInput
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    size="lg"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <MDBInput
                                                    label="Password"
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    size="lg"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <MDBInput
                                                    label="Confirm Password"
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    size="lg"
                                                />
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <MDBBtn
                                                    type="submit"
                                                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 py-3"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Registering..." : "Register"}
                                                </MDBBtn>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Already have an account?</p>
                                                <Link to={"/login"}>
                                                    <MDBBtn color="danger" outline>
                                                        Login
                                                    </MDBBtn>
                                                </Link>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCol>

                                {/* Right Side */}
                                <MDBCol
                                    lg="6"
                                    className="d-flex align-items-center gradient-custom-2"
                                >
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">Welcome to our community</h4>
                                        <p className="small mb-0">
                                            Register now and be part of our growing family. Enjoy
                                            access to exclusive features, seamless communication, and
                                            more!
                                        </p>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Register;
