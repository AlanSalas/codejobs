import React, { useState } from "react";
import { ALL_ORIGINS_URI, GITHUB_API_URI } from "../config/globalVars";
import Header from "../components/Header";
import JobList from "../components/JobList";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";

function Home() {
  const [page, setPage] = useState(1);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  const { data: jobs, setData, loadMore, loading, setLoading, err, search, setSearch } = useFetch(
    `${ALL_ORIGINS_URI}get?url=${encodeURIComponent(
      `${GITHUB_API_URI}positions.json?page=${page}&description=${description}&location=${location}&full_time=${fullTime}`
    )}`
  );

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = () => {
    const $inputDescription = document.getElementById("inputDescription");
    const $inputLocation = document.getElementById("inputLocation");
    const $inputFullTime = document.getElementById("inputFullTime");

    if (
      !$inputDescription.value.trim() &&
      !$inputLocation.value.trim() &&
      !$inputFullTime.checked
    ) {
      alert("Must be a valid search :/");
    } else {
      setLoading(true);
      setSearch(!search);
      setData([]);
      setDescription($inputDescription.value || "");
      setLocation($inputLocation.value || "");
      setFullTime($inputFullTime.checked || false);
    }
  };

  return (
    <div className="home">
      <Header showSearch={true} handleSearch={handleSearch} />
      {err ? (
        <Error err={err} />
      ) : (
        <JobList
          jobs={jobs}
          handleLoadMore={handleLoadMore}
          loadMore={loadMore}
          loading={loading}
        />
      )}
    </div>
  );
}

export default Home;
