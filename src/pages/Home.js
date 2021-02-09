import React from "react";
import Header from "../components/Header";
import JobList from "../components/JobList";

function Home() {
  return (
    <div className="home">
      <Header showSearch={true} />
      <JobList />
    </div>
  );
}

export default Home;
