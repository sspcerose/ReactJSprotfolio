import React from "react";
import "./style.css";

const SectionTitle = (props) => {
  return (
    <>
      <div className="CustomSectionTitle">
        <p className="subheading">{props.subheading}</p>
        <h2 className="heading">{props.heading}</h2>
      </div>
    </>
  );
};

export default SectionTitle;
