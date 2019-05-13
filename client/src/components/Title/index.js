import React from "react";

function Title({ children }) {
  return (
    <div
      style={{ height: 60, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron header"
    >
      {children}
    </div>
  );
}

export default Title;