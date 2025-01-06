import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="ProjectItems">
      <div className="ProjectItemImg">
        <img src={props.img} className="PImg" alt={props.title} />
      </div>
      <div className="ProjectItemInfo">
        <div>
          <h3 className="ProjectItemTitle">{props.title}</h3>
        </div>
        <p className="ProjectItemDesc">{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
