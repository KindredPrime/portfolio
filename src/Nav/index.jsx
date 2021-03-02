import React from 'react';
import { NavLink } from 'react-router-dom';
import emailIcon from '../images/email-icon.png';
import linkedInIcon from '../images/linkedin-logo.png';
import './index.css';

class Nav extends React.Component {
  state = {
    expanded: false
  };

  render() {
    const { expanded } = this.state;

    const navClass = expanded
      ? "Nav expanded"
      : "Nav";

    const menuLinksClass = expanded
      ? "Nav__menu-links expanded"
      : "Nav__menu-links";

    return (
      <nav className={navClass}>
        <NavLink className="Nav__home" to="/">
          Ken Wright
          <span className="visually-hidden">Change layout to homepage</span>
        </NavLink>

        <button
          className="Nav__menu"
          onClick={() => this.setState({ expanded: !expanded })}
        >
          ☰
          <span className="visually-hidden">Show/Hide menu links</span>
        </button>

        <div className={menuLinksClass}>
          <NavLink to="/projects">Projects</NavLink>

          <a
            href="mailto:kenneth.gordon.wright@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="email-image-link"
          >
            <img src={emailIcon} alt="Email" className="email-icon" />
          </a>

          <a
            href="mailto:kenneth.gordon.wright@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="email-text-link"
          >
            kenneth.gordon.wright@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/ken-wright-52554556/"
            className="linkedin-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="linkedin-icon" />
          </a>

          <a
            href="https://github.com/KindredPrime"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

      </nav>
    );
  }
}

export default Nav;