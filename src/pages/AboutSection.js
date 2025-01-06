import React from "react";
import HomeSection from "./HomeSection";
import SectionTitle from "../components/SectionTitle";
import Ptext from "../components/Ptext";
import Button from "../components/Button";
import AboutInfo from "../components/AboutInfo";
import about from "../img/about1.jpg";
import about1 from "../img/about1.png";
import about2 from "../img/about2.jpg";
import { VscHeartFilled } from "react-icons/vsc";
import "./style.css";

function AboutSection() {
  return (
    <section id="about">
      <div className="AboutSectionContainer">
        <div className="container">
          <div className="LeftPartSection">
            <VscHeartFilled className="Aboutheart" />
            <VscHeartFilled className="Aboutheart" />
            <VscHeartFilled className="Aboutheart" />
            <SectionTitle
              className="SectionTitle"
              subheading="Let me introduce myself"
              heading="About Me"
            />
            <Ptext className="">
              <p className="Paragraph">
                I am Roseanne, a web developer. I am passionate about creating
                functional, user-friendly websites and continously learning new
                technologies to stay ahead in the industry
              </p>
            </Ptext>
          </div>
          <div className="RightPartSection">
            <img src={about1}></img>
          </div>
        </div>

        <div className="AboutEducationContainer">
          <div className="AboutEducation">
            <VscHeartFilled className="Rightheart" />
            <VscHeartFilled className="Rightheart" />
            <VscHeartFilled className="Rightheart" />
            <h1 className="AboutEduc">Education</h1>

            <AboutInfo
              title="Elementary"
              item={["San Roque Elementary School"]}
            />
            <AboutInfo
              title="High School"
              item={["Bartolome Sangalang National High School"]}
            />
            <AboutInfo
              title="College"
              item={["Central Luzon State University"]}
            />
          </div>

          <div className="AboutSkills">
            <h1 className="AboutSki">Skills</h1>

            <AboutInfo
              title="FrontEnd"
              item={["HTML", "CSS", "JavaScript", "ReactJS"]}
            />
            <AboutInfo title="BackEnd" item={["PHP"]} />
            <AboutInfo title="Design" item={["Figma", "Canva", "Photoshop"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
