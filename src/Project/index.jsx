import PropTypes from 'prop-types';
import TechLogos from '../TechLogos/index';
import ProjectLinks from '../ProjectLinks/index';
import './index.css';

function Project(props) {
  const {
    screenshots,
    title,
    techLogos,
    description,
    repoLink,
    liveLink
  } = props;

  return (
    <section className="Project">
      {screenshots.length > 0
        && <img src={screenshots[0].src} alt={screenshots[0].alt} />}
      <h2 className="Project__title">{title}</h2>
      <TechLogos logos={techLogos} />
      <p className="Project__description">{description}</p>
      <ProjectLinks repo={repoLink} live={liveLink} />
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
  repoLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired
};

export default Project;