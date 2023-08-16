import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Experience',
  'Education',
  'Skills',
  'References',
  'Download PDF version',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec, index) => (
              <h4 key={sec}>
                <a
                  href={
                    index === 4
                      ? '/pdf/Lilia Dassine Belaïd Bründler 2023.pdf'
                      : `#${sec.toLowerCase()}`
                  }
                  download={index === 4}
                >
                  {sec}
                </a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />
      <References />
    </article>
  </Main>
);

export default Resume;
