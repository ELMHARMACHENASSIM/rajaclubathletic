import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import News from "../pages/News";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Matches from "../pages/Matches";
import Squads from "../pages/Squads";
import Tickets from "../pages/Tickets";
import Media from "../pages/Media";
import About from "../pages/About";

const routerDom = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/matches",
        element: <Matches />,
      },
      {
        path: "/squads",
        element: <Squads />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default routerDom;
