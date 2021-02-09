import React from "react";
import JobCard from "./JobCard";

function JobList() {
  return (
    <div className="job-list">
      <div className="container">
        <div className="job-list__grid">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default JobList;
