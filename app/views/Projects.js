import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Main>
      <Helmet title="Projects" />
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
            <p>A selection of projects that I&apos;m not too ashamed of</p>
          </div>
        </header>
        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
