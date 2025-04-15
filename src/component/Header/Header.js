import Logo from "./Logo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

export default Header = () => {
  const { defaultUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="flex justify-between  bg-rose-700 my-4">
      <div className="w-20">
        <Logo />
      </div>
      <nav className="flex items-center px-4">
        <Link to="/">
          <span className="px-2 font-bold text-xl">🏠</span>
        </Link>
        <Link to="/about">
          <span className="px-2 font-bold text-xl text-white">About</span>
        </Link>
        <Link to="/contact">
          <span className="px-2 font-bold text-xl text-white">Contact Us</span>
        </Link>
        <span className="px-2 text-xl font-bold text-white">
          {defaultUserName}
        </span>
        <Link to="/cart">
          <span className="px-2 tetext-xl">🛒- {cartItems.length}</span>
        </Link>
      </nav>
    </header>
  );
};
