import React from "react";

function CardSkeleton() {
  return (
    <div className="job-card-skeleton">
      <div></div>
      <div></div>
      <div></div>
      <div className="job-card-skeleton__company-logo"></div>
    </div>
  );
}

export default CardSkeleton;
