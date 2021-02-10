import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs, handleLoadMore }) {
  return (
    <div className="job-list">
      <div className="container">
        <div className="job-list__grid">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div className="job-list__more">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      </div>
    </div>
  );
}

export default JobList;
