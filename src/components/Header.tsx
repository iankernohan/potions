import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <h1>Pretty Potions</h1>
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
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
