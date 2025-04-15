import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header/Header";
import Body from "./src/component/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Cart from "./src/pages/Cart";
import Footer from "./src/component/Footer/Footer";
import ErrorPage from "./src/pages/Error";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/store/appStore";
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

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

const Menu = lazy(() => import("./src/pages/Menu"));

const AppContainer = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "Raj",
    };
    setUserName(data.name);
  });
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ defaultUserName: userName }}>
          <div className="app">
            {/* <Home /> */}
            <Header />
            <Outlet />
            {/* <Body /> */}
            <Footer />
          </div>
        </UserContext.Provider>
      </QueryClientProvider>
    </Provider>
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
        path: "cart",
        element: <Cart />,
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
