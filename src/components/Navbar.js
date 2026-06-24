import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>Bloom Cycle</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/symptoms">Symptoms</Link>
        <Link to="/perimenopause">Perimenopause</Link>
        <Link to="/menopause">Menopause</Link>
        <Link to="/products">Products</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/my-journey">My Journey</Link>
      </div>
    </nav>
  );
}

export default Navbar;
