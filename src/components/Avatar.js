import { useState } from "react";

function Avatar({ companyName }) {
  const colorCode =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  const [color] = useState(colorCode);

  return (
    <div className="avatar" style={{ backgroundColor: color }}>
      <span>{companyName.charAt(0).toUpperCase()}</span>
    </div>
  );
}

export default Avatar;
