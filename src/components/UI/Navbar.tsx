import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const cartPotions = useAppSelector((state) => state.cart.potions);
  const cartLength: string =
    cartPotions.length > 0
      ? ` ${cartPotions.reduce((a, b) => a + b.quantity, 0)}`
      : "";

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
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>
            <IoCartOutline size={"2rem"} />
            {cartLength}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
