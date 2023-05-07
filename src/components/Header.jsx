import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="nav-bg">
      <Nav className="container d-flex align-items-baseline py-5" activeKey="/">
        <Nav.Item className="display-5 ">
          <NavLink to="/" className="text-dark ">
            #VANLIFE
          </NavLink>
        </Nav.Item>
        <Nav.Item className="h3 ms-auto ">
          <NavLink
            to="/host"
            className="text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Host
          </NavLink>
        </Nav.Item>
        <Nav.Item className="h3 ms-5 ">
          <NavLink
            to="/about"
            className="text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item className="h3 ms-5 text-dark">
          <NavLink
            to="/vans"
            className="text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}
