import React, { useContext, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";
import app from "../../../firebase.config";

const Register = () => {
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);
  const auth = getAuth(app);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.username.value;
    const photoUrl = form.photourl.value;
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
          email: email,
        }).then(() => {
          const saveUser = { name: name, email: email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                form.reset();
             
              }
              navigate("/");
            });
        });
        setSuccess("Registration Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div className="hero mt-32 mb-16">
      <div className="hero-contentl">
        <div className="card w-full lg:w-96 shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold pt-5 text-center">
            Please Register
          </h1>
          <form onSubmit={handleButton} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                name="username"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo url"
                name="photourl"
                required
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              Already Have an account? Please{" "}
              <Link
                className="link link-hover text-cyan-800 font-bold"
                to="/login"
              >
                Login
              </Link>{" "}
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-base">Register</button>
            </div>
            <p className="text-red-500">{error}</p>
            <p className="text-green-600">{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
