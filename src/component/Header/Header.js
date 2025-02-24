import Logo from "./Logo";
export default Header = () => {
  return (
    <div className="header">
      <div children="logo">
        <Logo />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
