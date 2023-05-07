import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  //fetching the data
  useEffect(() => {
    try {
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => setVans(data.vans));
    } catch (err) {
      console.log(err);
    }
  }, []);

  //turning data into jsx
  const vanElements = vans.map((van) => (
    <div key={van.id} className="col-sm-auto van-title my-2">
      <Link className="text-decoration-none text-dark" to={`/vans/${van.id}`}>
        <img className="van-img rounded" src={van.imageUrl} />
        <div>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/days</span>
          </p>
          <button className="btn btn-dark px-3">{van.type}</button>
        </div>
      </Link>
    </div>
  ));

  console.log(vans);
  return (
    <>
      <div className="van-cont">
        <div className="container ">
          <h1>Explore our van options</h1>
          <div className="row">{vanElements}</div>
        </div>
      </div>
    </>
  );
}
