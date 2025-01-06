import React from "react";
import Ptext from "../components/Ptext";

import { GoArrowDown } from "react-icons/go"; // Importing arrow down icon
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import "./style.css";

function Footer() {
  return (
    <section id="contact">
      <div className="ContactContainer">
        <div className="ContactBanner">
          <Ptext>Have a project in mind?</Ptext>
          <h3 className="ContactBannerHeading">Let me help you</h3>
        </div>
      </div>
    </section>
  );
}

export default Footer;
