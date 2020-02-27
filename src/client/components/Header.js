import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar style={{ backgroundColor: "dodgerBlue" }} light>
        <NavbarBrand
          tag={Link}
          style={{ color: "white" }}
          to="/"
          className="mr-auto"
        >
          AnimeSSR
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} style={{ color: "white" }} to="/anime">
                Anime
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} style={{ color: "white" }} to="/auth">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
