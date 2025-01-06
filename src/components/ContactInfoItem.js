import React from "react";
import { VscHeartFilled } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import Ptext from "./Ptext";

const ContactInfoItem = (props) => {
  return (
    <div className="ContactInfoItem">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <Ptext>{props.text}</Ptext>
      </div>
    </div>
  );
};

export default ContactInfoItem;
