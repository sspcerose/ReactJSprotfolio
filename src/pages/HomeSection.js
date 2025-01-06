import React from "react";
import me from "../img/me.jpg";
import post from "../img/post.jpg";
import hello from "../img/hello.jpg";
import space from "../img/space.jpg";
import d from "../img/d.jpg";
import white from "../img/white.jpg";
import com from "../img/com.gif";
import hell from "../img/hello-world.gif";
import Ptext from "../components/Ptext";
import Button from "../components/Button";
import { GoArrowDown } from "react-icons/go";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";
import "./style.css";

function HomeSection() {
  return (
    <section id="home">
      <div className="HeadContainer">
        <div className="container">
          <h1 className="Heading">
            <VscHeartFilled className="heart" />
            <VscHeartFilled className="heart" />
            <VscHeartFilled className="heart" />
            <span className="">Hello, I am</span>
            <span className="MyName">ROSEANNE JOY DELA CRUZ</span>
          </h1>
          <div className="HeadingImg">
            <img src={white} />
          </div>
          <div className="HeadingInfo">
            <Ptext>
              I am 4th Year IT Student from Central Luzon State University
            </Ptext>
            <Button
              className="HeadButton"
              btnLink="#projects"
              btnText="MY PROJECTS"
              outline={true}
            />
            <div className="Social">
              <div className="SocialMedia">
                <p class="follow">Follow</p>
                <GoArrowDown className="arrow" />
                <div className="SocialText">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/joy.delacruz.5268750?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookSquare />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/sspcerose?igsh=ZGsxNXdtbHBqcTFi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagramSquare />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ScrollDown">
                <p class="toscroll">Scroll</p>
                <GoArrowDown className="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
