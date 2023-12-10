import React, { lazy, Suspense, useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext,  } from "./context/AuthContext";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
//import components
import Footer from "./components/Footer";
import Header from "./components/Header";
//import pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error = lazy(() => import("./pages/Error"));
const Store = lazy(() => import("./pages/Store"));
const SingleStore = lazy(() => import("./pages/SingleStore"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Dog = lazy(() => import("./pages/Dog"));
const Colors = lazy(() => import("./pages/Colors"));
const Quotes = lazy(() => import("./pages/Quotes"));
const ChuckNorris = lazy(() => import("./pages/ChuckNoriss"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  const { currentUser, darkMode } = useContext(AuthContext);
  const PrivateRoute = () => {
    return (
      <Suspense fallback={<div className="custom-loader"></div>}>
        <Header />
        {currentUser ? <Outlet /> : <Navigate to="/Login" />}
        <Footer />
      </Suspense>
    );
  };
  const Layout = () => {
    return (
      <Suspense fallback={<div className="custom-loader"></div>}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    );
  };

  const myRoutes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
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

        { path: "/gallery", element: <Gallery /> },

        { path: "/dog", element: <Dog /> },

        { path: "/colors", element: <Colors /> },
        { path: "/quotes", element: <Quotes /> },
        { path: "/chucknorris", element: <ChuckNorris /> },
      ],
      errorElement: (
        <>
          <Header />
          <Error />,
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/store/:id",
          element: <SingleStore />,
        },
      ],
      errorElement: (
        <>
          <Header />
          <Error />,
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <div className={darkMode? "dark" : "bg-slate-50"}>
      <Toaster />
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
}

export default App;
