import React from "react";
import styled from "styled-components";
import Ptext from "../components/Ptext";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ContactInfoItem from "../components/ContactInfoItem";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { VscHeartFilled } from "react-icons/vsc";
import "./style.css";

function ContactSection() {
  return (
    <section id="contact">
      <div className="ContactContainer">
        <div className="container">
          <VscHeartFilled className="contactheart" />
          <VscHeartFilled className="contactheart" />
          <VscHeartFilled className="contactheart" />
          <div className="ContactSection">
            <SectionTitle
              heading="Contact"
              subheading="Get in Touch"
            ></SectionTitle>
          </div>
          <div className="ContactSectionWrapper">
            <div className="ContactSectionLeft">
              <ContactInfoItem
                icon={<FaLocationDot />}
                text="San Roque, Guimba, Nueva Ecija"
              />

              <ContactInfoItem
                icon={<MdEmail />}
                text="roseannejoydelacruz@gmail.com"
              />

              <ContactInfoItem
                icon={<MdOutlinePhoneIphone />}
                text="+63 945 132 3241"
              />
            </div>

            <div className="ContactSectionRight">
              <ContactInfoItem
                icon={<FaFacebookSquare />}
                text="Roseanne Joy Dela Cruz"
              />

              <ContactInfoItem
                icon={<FaInstagramSquare />}
                text="@roseannejoy"
              />

              <ContactInfoItem
                icon={<FaSquareXTwitter />}
                text="@roseannejoydelacruz"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
