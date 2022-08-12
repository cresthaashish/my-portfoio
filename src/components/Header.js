import { useState, useEffect } from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Header = (props) => {
  const [isActiveHeader, setIsActiveHeader] = useState(false);

  const scrollClass = props.isScroll === true ? "scrolled" : "";
  const clickedClass = isActiveHeader === true ? "header-top" : "";
  return (
    <header id="header" className={`${scrollClass} ${clickedClass}`}>
      <div className="container">
        <h1>
          <a href="/">Ashish Shrestha</a>
        </h1>
        <h2>
          I'm a passionate <span>Wordpress Developer</span> from Nepal.
        </h2>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className={props.isActive === "#header" ? "active" : ""}
                href="#header"
                onClick={() => {
                  props.setIsActive("#header");
                  setIsActiveHeader(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={props.isActive === "#about" ? "active" : ""}
                href="#about"
                onClick={() => {
                  props.setIsActive("#about");
                  setIsActiveHeader(true);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={props.isActive === "#resume" ? "active" : ""}
                href="#resume"
                onClick={() => {
                  props.setIsActive("#resume");
                  setIsActiveHeader(true);
                }}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className={props.isActive === "#services" ? "active" : ""}
                href="#services"
                onClick={() => {
                  props.setIsActive("#services");
                  setIsActiveHeader(true);
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className={props.isActive === "#portfolio" ? "active" : ""}
                href="#portfolio"
                onClick={() => {
                  props.setIsActive("#portfolio");
                  setIsActiveHeader(true);
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={props.isActive === "#contact" ? "active" : ""}
                href="#contact"
                onClick={() => {
                  props.setIsActive("#contact");
                  setIsActiveHeader(true);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <div className="social-links">
          <a href="#" className="twitter">
            <AiOutlineTwitter />
          </a>
          <a href="#" className="facebook">
            <BsFacebook />
          </a>
          <a href="#" className="instagram">
            <AiOutlineInstagram />
          </a>
          <a href="#" className="linkedin">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
