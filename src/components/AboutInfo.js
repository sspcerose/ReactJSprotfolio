import React from "react";
import Ptext from "./Ptext";

const AboutInfo = (props) => {
  return (
    <div className="AboutInfoContainer">
      <div className="BBB">
        <h1 className="AboutInfoTitle">{props.title}</h1>
        <div className="AboutInfoItems">
          {props.item.map((item, index) => (
            <div className="EachItem" key={index}>
              <Ptext>{item}</Ptext>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
