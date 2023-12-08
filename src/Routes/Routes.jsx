import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyNow from "../Pages/ApplyNow/ApplyNow";
import SmallBusinessLoans from "../Pages/SmallBusinessLoans/smallBusinessLoans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  { path: "signup", element: <SignUp /> },
  { path: "login", element: <Login /> },
  {path:"applynow", element:<ApplyNow/>},
{path:"smallBusinessLoans", element:<SmallBusinessLoans/>}
]);
