import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSub, closeSub } = useGlobalContext();

  const displaySub = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSub(page, { center, bottom });
  };

  const handleMouse = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSub();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleMouse}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySub}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySub}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySub}>
              company
            </button>
          </li>
        </ul>
        <button className="btn sign-in">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
