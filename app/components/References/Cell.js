import React from "react";
import PropTypes from "prop-types";
import url from "url";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <a href={data.link} className="image">
        <img src={url.resolve(BASE_PATH, data.image)} alt="" />
      </a>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
