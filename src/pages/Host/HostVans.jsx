import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElement = vans.map((van) => {
    return (
      <Link to={`/host/vans/${van.id}`} key={van.id}>
        <div className="d-flex bg-light mb-3 p-3">
          <img
            src={van.imageUrl}
            className="hostVan-img rounded"
            alt={`photo of ${van.name}`}
          />
          <div className="text-dark ms-3">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <section className="nav-bg py-4">
        <div className="container">
          <h2>Your listed vans</h2>
          {vans.length > 0 ? <div>{vansElement}</div> : <h2>Loading...</h2>}
        </div>
      </section>
    </>
  );
}
