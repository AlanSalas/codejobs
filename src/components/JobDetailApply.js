import React from "react";

function JobDetailApply({ how_to_apply }) {
  return (
    <div className="job-detail-apply" id="how-to-apply">
      <h3>How to apply</h3>
      <p dangerouslySetInnerHTML={{ __html: how_to_apply }} />
    </div>
  );
}

export default JobDetailApply;
