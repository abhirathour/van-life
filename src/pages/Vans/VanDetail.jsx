import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [param.id]);

  return (
    <div className="van-cont">
      {van ? (
        <div className="container">
          <img className="w-100 rounded-2 mb-4" src={van.imageUrl} />
          <button className="btn btn-dark px-5 my-4">{van.type}</button>
          <h2>{van.name}</h2>
          <p>
            <span className="my-3 fs-3">${van.price}</span>/day
          </p>
          <p className="lead">{van.description}</p>
          <div className="row mt-5">
            <button className="btn btn-danger py-2 my-3 fs-3 text-light">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
}
