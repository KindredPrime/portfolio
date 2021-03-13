import PropTypes from 'prop-types';
import './index.css';

function ProjectLinks(props) {
  const { repo, live, disabled } = props;

  return (
    <div className="ProjectLinks">
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <span className="ProjectLinks__divider">|</span>
      {disabled
        ? <p className="ProjectLinks__disabled">
          <span>Live</span>
          (Currently disabled while being fixed)
        </p>
        : <a
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>}
    </div>
  );
}

ProjectLinks.propTypes = {
  repo: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired
}

export default ProjectLinks;