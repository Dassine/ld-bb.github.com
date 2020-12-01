import React from "react";

import data from "../../data/resume/references";
import Cell from "../References/Cell";

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>References</h3>
      {data.map(ref => (
        <Cell data={ref} key={ref.title} />
      ))}
    </div>
  </div>
);

export default References;
