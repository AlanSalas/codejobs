import React from "react";

function JobDetailTitle({ company, company_url }) {
  return (
    <div className="job-detail-title">
      <div className="job-detail-title__meta">
        <div className="job-detail-title__meta-company">
          <h2>{company}</h2>
          {company_url ? <p>{company_url}</p> : null}
        </div>
        {company_url ? (
          <a href={company_url}>
            <button>Company Site</button>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default JobDetailTitle;
