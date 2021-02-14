import React from "react";
import ErrorImg from "../assets/error.png";

function Error({ err }) {
  return (
    <div className="error">
      <h1>{err}</h1>
      <img src={ErrorImg} alt="Error" />
    </div>
  );
}

export default Error;
