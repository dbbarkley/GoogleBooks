import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <a className="btn btn-info view-btn" href={props.link} target="_blank" rel="noopener noreferrer" role="button" tabIndex="0">
      View
    </a>
  );
}

export default ViewBtn;