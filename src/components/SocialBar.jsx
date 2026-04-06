import "./socialbar.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="social-bar">
      
      <a
        href="https://www.linkedin.com/in/suzy-nguefack"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://github.com/mbafousu"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

    </div>
  );
}