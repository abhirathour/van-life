import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Home() {
  return (
    <>
      <div className="home-cont text-light">
        <div className="container  pt-5">
          <h1 className="display-3 pt-3">
            You got the travel plans,we got the travel vans.
          </h1>
          <p className="fs-4 pt-5">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <div className="d-grid mt-5 py-3">
            <button className="btn btn-warning p-3 text-dark fs-2">
              Find Your Van
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
