import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-box">
        <div className="logo-circle">S</div>
        <span className="logo-text">SUZY CAROL MBAFOU NGUEFACK</span>
      </div>

      <nav className="nav-links">
        <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/skills">SKILLS</Link>
     <Link to="/contact">CONTACTS</Link>
       
      </nav>
    </header>
  );
}