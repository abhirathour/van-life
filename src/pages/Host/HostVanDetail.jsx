import React, { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const [currVan, setCurrVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrVan(data.vans));
  }, []);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  if (!currVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="py-5">
      <NavLink to=".." relative="path" className="text-dark fs-5 p-5">
        &larr;<span>Back to all vans </span>
      </NavLink>
      <div className="container d-flex p-4 bg-light mt-3">
        <img src={currVan.imageUrl} width={150} className="rounded" />
        <div className="ms-3 fs-2">
          <p className="nav-bg p-2 fs-5 rounded text-center" width={100}>
            {currVan.type}
          </p>
          <h2>{currVan.name}</h2>
          <p>${currVan.price}/day</p>
        </div>
      </div>

      {/* navbar */}
      <nav className="container d-flex justify-content-start p-4 bg-light">
        <NavLink
          to="."
          end
          className="fs-4 text-dark"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className="fs-4 text-dark ms-5"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          className="fs-4 text-dark ms-5"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Photos
        </NavLink>
      </nav>
      <div className="container bg-light p-4">
        <Outlet context={[currVan]} />
      </div>
    </section>
  );
}
