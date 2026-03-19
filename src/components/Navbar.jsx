import { Link } from "react-router-dom";
import "./navbar.css";
import profileImg from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-box">
        <img src={profileImg} alt="Suzy profile" className="logo-img" />
        <span className="logo-text">SUZY CAROL MBAFOU NGUEFACK</span>
      </div>

      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}