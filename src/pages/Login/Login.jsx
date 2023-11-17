import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { googleAuth, userSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [check, setCheck] = useState(false);
  const from = location.state?.from?.pathname || "/";
  console.log(location);

  const handleButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess("");
    setError("");
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          form.reset();
          toast.success("Successfully logged in.");
        }
        setSuccess("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const handleAuth = () => {
    googleAuth()
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Successfully logged in.");
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero mt-32 mb-10">
      <div className="hero-content">
        <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center  font-bold pt-5">Please Login</h1>
          <form onSubmit={handleButton} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={check ? "text" : "password"}
                name="password"
                required
                placeholder="password"
                className="input input-bordered" // Added padding for the toggle button
              />
              <input
                onChange={() => setCheck(!check)}
                type="checkbox"
                className="toggle  toggle-accent  absolute top-12 right-2" // Positioned the toggle button
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              New to this website? Please
              <Link
                className="ms-1 link link-hover text-cyan-800 font-bold"
                to="/register"
              >
                Register
              </Link>
            </p>
            <div className="form-control mt-4">
              <button className="btn btn-accent text-base">Login</button>

              <div className="divider"></div>
              <button onClick={handleAuth} className="btn btn-outline ">
                <FaGoogle className="me-2 text-base"></FaGoogle>Login with
                Google
              </button>
            </div>
            <p className="text-red-500">{error}</p>
            <p className="text-green-500">{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
