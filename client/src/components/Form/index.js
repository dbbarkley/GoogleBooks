import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} style={{ width: '50%', marginLeft: '25%' }}/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10, width: 150, marginLeft: '43%' }} className="btn btn-success searchBtn">
      {props.children}
    </button>
  );
}