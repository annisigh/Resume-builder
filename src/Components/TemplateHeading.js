import React from "react";
import "../Styles/TemplateHeading.css";

//TemplateHeading used for rendering a heading with a colored line underneath.
const TemplateHeading = (props) => {
  return (
    <div>
      <h2
        style={{ color: props.color }}
        className="professional-experience-heading">
        {props.title}
      </h2>
      <hr style={{ backgroundColor: props.color }} className="vertical-line" />
    </div>
  );
};

export default TemplateHeading;
