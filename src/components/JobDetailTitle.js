import React from "react";

function JobDetailTitle({ company, company_logo, company_url }) {
  return (
    <div className="job-detail-title">
      <div className="job-detail-title__img">
        <img src={company_logo} alt={company} />
      </div>
      <div className="job-detail-title__meta">
        <div className="job-detail-title__meta-company">
          <h2>{company}</h2>
          <p>{company_url}</p>
        </div>
        <a href={company_url}>
          <button>Company Site</button>
        </a>
      </div>
    </div>
  );
}

export default JobDetailTitle;
