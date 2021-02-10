import React, { useState } from "react";
import Header from "../components/Header";
import JobList from "../components/JobList";
import useFetch from "../hooks/useFetch";

function Home() {
  const [page, setPage] = useState(1);

  const { data: jobs } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://jobs.github.com/positions.json?page=${page}`
    )}`
  );

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="home">
      <Header showSearch={true} />
      <JobList jobs={jobs} handleLoadMore={handleLoadMore} />
    </div>
  );
}

export default Home;
