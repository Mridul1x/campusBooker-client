import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ProgressBar, RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="#EC1D24"
        barColor="#FFDE00"
      />
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
