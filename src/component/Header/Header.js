import Logo from "./Logo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export default Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <nav>
          <Link to="/">🏠</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
        🛒
        </nav>
      </header>
  );
};
