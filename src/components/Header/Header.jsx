import { Link } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <h2>Blog</h2>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
