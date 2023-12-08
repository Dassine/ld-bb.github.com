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
      <h2>Lilia Dassine Belaïd Bründler</h2>
      <p>
        <a href="mailto:contact@ld-bb.dev">contact@ld-bb.dev</a>
      </p>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((contact) => (
          <li key={contact.label}>
            <a href={contact.link} target="_blank">
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Lilia Dassine Belaïd Bründler <Link to="/">ld-bb.dev</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
