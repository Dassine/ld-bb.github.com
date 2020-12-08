import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={data.link} target="_blank">
          {data.company}
        </a>
        <a href={data.sublink} target="_blank">
          {data.subCompany}
        </a>
        - {data.position}
      </h4>
      <p className="location"> {data.location}</p>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <p className="description">{data.description}</p>
    <ul className="points">
      {data.points && data.points.map((point) => <li key={point}>{point}</li>)}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    sublink: PropTypes.string,
    subCompany: PropTypes.string,
    position: PropTypes.string.isRequired,
    location: PropTypes.string,
    daterange: PropTypes.string.isRequired,
    description: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Job;
