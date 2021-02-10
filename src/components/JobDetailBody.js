import React from "react";
import { Link } from "react-scroll";

function JobDetailBody({ timeAgo, title, location, description, type }) {
  return (
    <div className="job-detail-body">
      <div className="job-detail-body__title">
        <div className="job-detail-body__title-meta">
          <p className="job-detail-body__title-time">
            <span>{timeAgo}</span>
            <span style={{ margin: "0 0.5rem" }}>•</span>
            <span>{type}</span>
          </p>
          <h3>{title}</h3>
          <p className="job-detail-body__title-location">{location}</p>
        </div>
        <Link to="how-to-apply" smooth={true}>
          <button>Apply Now</button>
        </Link>
      </div>
      <div className="job-detail-body__content" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default JobDetailBody;
