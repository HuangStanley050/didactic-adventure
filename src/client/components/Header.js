import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
  const handleLogout = () => {
    if (window.confirm("are you logging out?")) {
      window.location.assign("/api/logout");
    }
    return;
  };
  const loginLink = (
    <>
      <NavItem>
        <NavLink tag={Link} style={{ color: "white" }} to="/anime">
          Anime
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={handleLogout}
          //href="/api/logout"
          style={{ color: "white", cursor: "pointer" }}
        >
          Logout
        </NavLink>
      </NavItem>
    </>
  );
  const logoutLink = (
    <NavItem>
      <NavLink tag={Link} style={{ color: "white" }} to="/auth">
        Login
      </NavLink>
    </NavItem>
  );
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
          <Nav navbar>{props.isAuth ? loginLink : logoutLink}</Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapState = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapState)(Header);
