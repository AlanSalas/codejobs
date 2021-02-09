import React from "react";

function JobDetailTitle() {
  return (
    <div className="job-detail-title">
      <div className="job-detail-title__img">
        <img
          src="https://github-jobs.s3.amazonaws.com/mMgJUgDQxj2GWWg8r7NRshR1?response-content-disposition=inline%3B%20filename%3D%22v1%20logo%20rgb.png%22%3B%20filename%2A%3DUTF-8%27%27v1%2520logo%2520rgb.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20210207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210207T195546Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=c15c9d9df74197b809eea89824565509ea45c75f6ff672e573964f25822a1097"
          alt=""
        />
      </div>
      <div className="job-detail-title__meta">
        <div className="job-detail-title__meta-company">
          <h2>So Digital Inc.</h2>
          <p>sodigital.co</p>
        </div>
        <button>Company Site</button>
      </div>
    </div>
  );
}

export default JobDetailTitle;
