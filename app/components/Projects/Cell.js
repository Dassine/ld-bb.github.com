import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';

import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Slider from 'react-slick';

const Cell = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <time className="published">
            {dayjs(data.date).format('MMMM, YYYY')}
          </time>
        </header>
        {data.video ? (
          <iframe
            src={
              data.video +
              '?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1'
            }
            width="100%"
            height="415"
            frameborder="0"
            allowfullscreen
          />
        ) : (
          <a href={data.link} className="image">
            <img src={url.resolve(BASE_PATH, data.image)} alt="" />
          </a>
          // {/* <AwesomeSlider cssModule={styles} cssModule={AwsSliderStyles}>
          //   <div data-src={url.resolve(BASE_PATH, data.image)} />
          //   <div data-src={url.resolve(BASE_PATH, data.image)} />
          //   <div data-src={url.resolve(BASE_PATH, data.image)} />
          // </AwesomeSlider> */}
        )}
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
    video: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

// import React from 'react';
// import PropTypes from 'prop-types';
// import dayjs from 'dayjs';
// import url from 'url';

// const Cell = ({ data }) => (
//   <div className="cell-container">
//     <article className="mini-post">
//       <header>
//         <h3>
//           <a href={data.link}>{data.title}</a>
//         </h3>
//         <time className="published">
//           {dayjs(data.date).format('MMMM, YYYY')}
//         </time>
//       </header>
//       <a href={data.link} className="image">
//         <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
//       </a>
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>
//   </div>
// );

// Cell.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Cell;
