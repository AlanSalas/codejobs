import React from "react";
import JobCard from "./JobCard";
import CardSkeleton from "./CardSkeleton";

function JobList({ jobs, handleLoadMore, loadMore, loading }) {
  return (
    <div className="job-list">
      <div className="container">
        <div className="job-list__grid">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
          {loading && (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
        </div>
        {!loading && (
          <div className="job-list__more">
            {loadMore ? <button onClick={handleLoadMore}>Load more</button> : <h3>No load more</h3>}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobList;
