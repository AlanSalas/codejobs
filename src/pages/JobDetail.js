import React from "react";
import Header from "../components/Header";
import JobDetailTitle from "../components/JobDetailTitle";
import JobDetailBody from "../components/JobDetailBody";
import JobDetailApply from "../components/JobDetailApply";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import moment from "moment";

function JobDetail() {
  const { id } = useParams();
  const { data: job } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://jobs.github.com/positions/${id}.json`
    )}`
  );

  const {
    company,
    company_logo,
    company_url,
    description,
    how_to_apply,
    location,
    title,
    type,
    created_at,
  } = job;

  moment().format("x");
  const unixDate = new Date(created_at);
  const timeAgo = moment(unixDate).fromNow();

  return (
    <div className="job-detail">
      <Header showSearch={false} />
      <div className="container-detail">
        <JobDetailTitle company={company} company_logo={company_logo} company_url={company_url} />
        <JobDetailBody
          timeAgo={timeAgo}
          title={title}
          location={location}
          description={description}
          type={type}
        />
        <JobDetailApply how_to_apply={how_to_apply} />
      </div>
    </div>
  );
}

export default JobDetail;
