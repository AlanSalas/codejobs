import React from "react";
import Header from "../components/Header";
import JobDetailTitle from "../components/JobDetailTitle";
import JobDetailBody from "../components/JobDetailBody";
import JobDetailApply from "../components/JobDetailApply";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  return (
    <div className="job-detail">
      <Header showSearch={false} />
      <div className="container-detail">
        <JobDetailTitle />
        <JobDetailBody />
        <JobDetailApply />
      </div>
    </div>
  );
}

export default JobDetail;
