import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lilia Dassine Belaïd Bründler</h2>
        <p>
          <a href="mailto:contact@dalibel.com">contact@dalibel.com</a>
        </p>
      </header>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Lilia Dassine Belaïd Bründler <Link to="/">dalibel.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
