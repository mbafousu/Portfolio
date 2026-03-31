import { NavLink } from "react-router-dom";
import "./navbar.css";
import profileImg from "../assets/profile.jpg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-box">
        <img src={profileImg} alt="Suzy Carol Mbafou Nguefack" className="logo-img" />

        <div className="logo-info">
          <span className="logo-name">CAROL MBAFOU</span>
          <span className="logo-role">Full Stack Software Engineer</span>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
          HOME
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          ABOUT
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
          PROJECTS
        </NavLink>

        <NavLink to="/skills" className={({ isActive }) => (isActive ? "active-link" : "")}>
          SKILLS
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}