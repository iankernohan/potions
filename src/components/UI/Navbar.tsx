import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <h1>
        <Link to={"/"}>Pretty Potions</Link>
      </h1>
      <div className="menu-icon" onClick={() => setShowMenu((prev) => !prev)}>
        <IoMenu />
      </div>
      <ul
        style={
          showMenu
            ? { maxHeight: "12rem", paddingTop: "10px", paddingBottom: "10px" }
            : {}
        }
      >
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </div>
  );
}
