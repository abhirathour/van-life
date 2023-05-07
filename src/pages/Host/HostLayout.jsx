import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <section className="nav-bg">
      <Nav className="container d-flex justify-content-between align-items-baseline py-4">
        <Nav.Item className="h3 ">
          <NavLink
            to="."
            className="text-dark"
            end={true}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Dashboard
          </NavLink>
        </Nav.Item>
        <Nav.Item className="h3">
          <NavLink
            to="income"
            className="text-dark "
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Income
          </NavLink>
        </Nav.Item>
        <Nav.Item className="h3 ">
          <NavLink
            to="vans"
            className="text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
        </Nav.Item>
        <Nav.Item className="h3">
          <NavLink
            to="reviews"
            className="text-dark  "
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Reviews
          </NavLink>
        </Nav.Item>
      </Nav>
      <Outlet />
    </section>
  );
}
