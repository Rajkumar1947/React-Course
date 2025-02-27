import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header/Header";
import Body from "./src/component/Body/Body";
import Home from "./src/component/Extra/Home";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Footer from "./src/component/Footer/Footer";
import ErrorPage from "./src/pages/Error";
import { Outlet } from "react-router-dom";
// import Menu from "./src/pages/Menu";

// JSX is HTML like syntax not HTML
/**
 * Restarent App
 * Heading
 *  - Logo
 *  - Menu
 * Body
 *  - Search
 *  - RestarentContainer
 *    - RestarentCard
 *  - Footer
 *    - COpy
 *    - Addreess
 *
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

const Menu = lazy(() => import("./src/pages/Menu"));

const AppContainer = () => {
  return (
    <div className="app">
      {/* <Home /> */}
      <Header />
      <Outlet />
      {/* <Body /> */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback="<h1> Loadding...</h1>">
            {" "}
            <Menu />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// root.render(jsxHeading);
// root.render(<RouterProvider router={appRouter} />);
