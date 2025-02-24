import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header/Header";
import Body from "./src/component/Body/Body";
import Home from "./src/component/Extra/Home";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";

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

const AppContainer = () => {
  return (
    <div className="app">
      {/* <Home /> */}
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// root.render(jsxHeading);
// root.render(<RouterProvider router={appRouter} />);
