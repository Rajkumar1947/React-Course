import Logo from "./Logo";
import { Link } from "react-router-dom";
export default Header = () => {
  return (
    <div className="header">
      <div children="logo">
        <Logo />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
