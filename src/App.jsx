import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Nav } from "react-bootstrap";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav
          className="nav-bg justify-content-around align-items-center p-4"
          activeKey="/"
        >
          <Nav.Item className="display-5 ">
            <Link to="/" className="text-dark text-decoration-none">
              #VANLIFE
            </Link>
          </Nav.Item>
          <Nav.Item className="h3">
            <Link to="/about" className="text-dark text-decoration-none ">
              About
            </Link>
          </Nav.Item>
        </Nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
