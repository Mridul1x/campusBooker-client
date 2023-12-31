import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Colleges from "../pages/Colleges/Colleges";
import CollegeDetails from "../pages/Colleges/CollegeDetails";
import CollegeItem from "../pages/Colleges/CollegeItem";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Admission from "../pages/Admission/Admission";
import MyColleges from "../pages/MyColleges/MyColleges";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
        children: [
          {
            path: ":id",
            element: (
              <PrivateRoute>
                <CollegeDetails></CollegeDetails>
              </PrivateRoute>
            ),
            loader: ({ params }) => {
              return fetch(
                `https://campus-booker-server.vercel.app/colleges/${params.id}`
              );
            },
          },
        ],
      },
      {
        path: "/college-details/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://campus-booker-server.vercel.app/colleges/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/mycolleges",
        element: <MyColleges></MyColleges>,
      },
    ],
  },
]);

export default router;
