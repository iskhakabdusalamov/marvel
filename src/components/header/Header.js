import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">
        <NavLink to="/">
          <span>Marvel</span> information portal
        </NavLink>
      </h1>
      <ul className="menu">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
            to="/"
          >
            Characters
          </NavLink>
        </li>
        <li>/</li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
            to="/comics"
          >
            Comics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
