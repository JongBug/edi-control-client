import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div>
    <header>
      <Navbar>
        <NavItem>
          <Link to="/"> Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/psireport">PSI Report</Link>
        </NavItem>
        <NavItem>
          <Link to="/na">na</Link>
        </NavItem>
      </Navbar>
    </header>
  </div>
);
export default Header;
