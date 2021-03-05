import PropTypes from 'prop-types';
import './index.css';

function ProjectLinks(props) {
  const { repo, live } = props;

  return (
    <div className="ProjectLinks">
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="ProjectLinks__repo"
      >
        GitHub
      </a>
      <span className="ProjectLinks__divider">|</span>
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="ProjectLinks__live"
      >
        Live
      </a>
    </div>
  );
}

ProjectLinks.propTypes = {
  repo: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired
}

export default ProjectLinks;