import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImg from "../assets/travel-2.jpg";

export default function About() {
  return (
    <div className="mb-3">
      <img src={bgImg} className="img-fluid about-bg" />
      <div className="container pt-4">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="container bg-warning p-4">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className="btn btn-dark mt-3" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
