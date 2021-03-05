import PropTypes from 'prop-types';
import './index.css';

function Project(props) {
  const {
    screenshots,
    title,
    techLogos,
    description,
    githubLink,
    liveLink
  } = props;

  return (
    <section className="Project">
      {screenshots.length > 0
        && <img src={screenshots[0].src} alt={screenshots[0].alt} />}
      <h2 className="Project__title">{title}</h2>
      {techLogos.map((techLogo) => {
        const {src, alt, classNames} = techLogo;
        return (
          <img
            key={techLogo.id}
            src={src}
            alt={alt}
            className={classNames}
          />
        );
      })}
      <p className="Project__description">{description}</p>
      <div className="Project__links">
        <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
        <a href={liveLink} target="_blank" rel="noreferrer">Demo</a>
      </div>
    </section>
  );
}

Project.propTypes = {
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  techLogos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      classNames: PropTypes.string.isRequired
    }
  )),
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired
};

export default Project;