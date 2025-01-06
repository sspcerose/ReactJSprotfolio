import React from "react";
import "./style.css";

const Ptext = (props) => {
  return (
    <>
      <div className="CustomPtext">
        <p>{props.children}</p>
      </div>
    </>
  );
};

export default Ptext;
