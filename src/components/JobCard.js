import React from "react";

function JobCard() {
  return (
    <div className="job-card">
      <p className="job-card__time">
        <span>4 days ago</span>
        <span style={{ margin: "0 0.5rem" }}>•</span>
        <span>Full Time</span>
      </p>
      <h3 className="job-card__title">Software Engineer</h3>
      <a className="job-card__company" href="#">
        Company name
      </a>
      <div className="job-card__cta">
        <p className="job-card__location">United States</p>
        <a href="#">Apply Now</a>
      </div>
      <div className="job-card__company-logo">
        <img
          src="https://github-jobs.s3.amazonaws.com/AY3i18FMVozGrxTthpfTrZ9U?response-content-disposition=inline%3B%20filename%3D%22European%20IT%20Consultancy%20EITCO%20GmbH.png%22%3B%20filename%2A%3DUTF-8%27%27European%2520IT%2520Consultancy%2520EITCO%2520GmbH.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20210207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210207T013151Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0235435f444af8c3055e32f991548aa6bc5dfc93934a3ac1296a0b9007821210"
          alt=""
        />
      </div>
    </div>
  );
}

export default JobCard;
