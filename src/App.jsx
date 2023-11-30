import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/sideMenu/SideMenu";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Posts from "./pages/posts/Posts";
import User from "./pages/user/User";
import Users from "./pages/users/Users";

function App() {
  const Layout = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="text-white bg-primary-bg">
          <Navbar />
          <div className="container flex">
            <div className="menu-container w-18 lg:w-[250px] py-1 px-5 border-r-2 border-r-light-bg">
              <SideMenu />
            </div>
            <div className="w-full px-5 py-1 content-container">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </LocalizationProvider>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
