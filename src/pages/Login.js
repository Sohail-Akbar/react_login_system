import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../assets/css/login.css";
import { sAlert } from "../utils/Functions";
import toast from "react-hot-toast";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from "mdb-react-ui-kit";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect if user is already logged in
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const result = await login(email, password);
            if (result.success) {
                // await sAlert("success", "Login Successfully");
                toast.success("Login Successful 🎉");
                navigate("/dashboard");
            } else {
                setError(result.message || "Invalid credentials");
                sAlert("error", result.message || "Invalid credentials");
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
            sAlert("error", err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <MDBContainer style={{ height: "100vh" }}>
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
                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <p>Please login to your account</p>

                                                <div className="mb-4">
                                                    <MDBInput
                                                        label="Username"
                                                        type="email"
                                                        placeholder="Phone number or email address"
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

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <MDBBtn
                                                        type="submit"
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 py-3"
                                                    >
                                                        Log in
                                                    </MDBBtn>
                                                    <a className="text-muted" href="#!">
                                                        Forgot password?
                                                    </a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <Link to={"/register"}  >
                                                        <MDBBtn color="danger" outline>
                                                            Create new
                                                        </MDBBtn>
                                                    </Link>
                                                </div>
                                            </form>
                                        </MDBCardBody>
                                    </MDBCol>

                                    {/* Right Side */}
                                    <MDBCol lg="6" className="d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Welcome Back!</h4>
                                            <p className="small mb-0">
                                                Join thousands of users who trust our platform to manage their
                                                daily tasks efficiently. Log in to access your personalized
                                                dashboard, stay connected, and explore all the powerful features
                                                designed to make your work easier and faster.
                                            </p>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
};

export default Login;
