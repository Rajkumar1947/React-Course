import React from "react";
import ReactDOM from "react-dom/client";

// JSX is HTML like syntax not HTML

const jsxHeading = <h1 id="heading">Hello world using JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const TitleComponent = () => {
  return <h1 id="heading">Hello world using React component!</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
    </div>
  );
};

// root.render(jsxHeading);
root.render(<HeadingComponent />);
