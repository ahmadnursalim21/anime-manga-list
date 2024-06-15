import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/src/assets/react.svg" alt="Gambar React" />
        </div>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/anime">Anime</Link>
          <Link to="/manga">Manga</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
