import React from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Projects from "../assets/img/portfolio.png";
import Services from "../assets/img/services.png";
import Work from "../assets/img/work.png";
import Jsprojects from "../assets/img/jsprojects.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div id="navigation">
        <ul className="list-unstyled">
          <Link to="/home">
            <li data-aos="zoom-in">
              <img src={Home} alt="home" />
              <div class="slider">
        <p>home</p>
      </div>
            </li>
          </Link>
          <Link to="/about">
            <li data-aos="zoom-in">
              <img src={About} alt="about" />
              <div class="slider">
        <p>about</p>
      </div>
            </li>
          </Link>
          <Link to="/services">
            <li data-aos="zoom-in">
              <img src={Services} alt="services" />
              <div class="slider">
        <p>what i do</p>
      </div>
            </li>
          </Link>
          <Link to="/work">
            <li data-aos="zoom-in">
              <img src={Work} alt="work" />
              <div class="slider">
        <p>skills</p>
      </div>
            </li>
          </Link>
          {/* <Link to="/education">
            <li data-aos="zoom-in">
              <img src={Education} alt="education" />
            </li>
          </Link> */}
          <Link to="/projects">
            <li data-aos="zoom-in">
              <img src={Jsprojects} alt="jsprojects" />     <div class="slider">
        <p>projects</p>
      </div>
            </li>
          </Link>
          {/* <Link to="/portfolio">
            <li data-aos="zoom-in">
              <img src={Projects} alt="portfolio" />
            </li>
          </Link> */}
          <Link to="/contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="contact" />
              <div class="slider">
        <p>contact</p>
      </div>
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <i className="bi bi-list"></i>
      </div>
    </div>
  );
};

export default Nav;
