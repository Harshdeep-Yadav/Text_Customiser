import React from "react";

function Alert(props) {
  return (
    <div className="alert alert-primary d-flex align-items-center" role="alert">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      <div>This is an Alert</div>
    </div>
  );
}

export default Alert;
