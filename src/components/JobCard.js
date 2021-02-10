import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import moment from "moment";

function JobCard({ job }) {
  moment().format("x");
  const unixDate = new Date(job.created_at);
  const timeAgo = moment(unixDate).fromNow();

  return (
    <div className="job-card">
      <p className="job-card__time">
        <span>{timeAgo}</span>
        <span style={{ margin: "0 0.5rem" }}>•</span>
        <span>{job.type}</span>
      </p>
      <h3 className="job-card__title">{job.title}</h3>
      <a className="job-card__company" href="#">
        {job.company}
      </a>
      <div className="job-card__cta">
        <p className="job-card__location">{job.location}</p>
        <Link to={`job/${job.id}`}>Apply Now</Link>
      </div>
      <div className="job-card__company-logo">
        <Avatar companyName={job.company} />
      </div>
    </div>
  );
}

export default JobCard;
