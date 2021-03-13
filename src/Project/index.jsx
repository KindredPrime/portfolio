import React from 'react';
import PropTypes from 'prop-types';
import ProjectSlideshow from '../ProjectSlideshow/index';
import TechLogos from '../TechLogos/index';
import ProjectLinks from '../ProjectLinks/index';
import './index.css';

class Project extends React.Component {
  screenSizes = {
    mobile: 'mobile',
    tablet: 'tablet',
    desktop: 'desktop'
  };

  state = {
    screenSize: this.screenSizes.mobile
  };

  setScreenSize = () => {
    const width = window.screen.width;
    if (width > 1000) {
      this.setState({
        screenSize: this.screenSizes.desktop
      });
    } else if (width > 690) {
      this.setState({
        screenSize: this.screenSizes.tablet
      });
    } else {
      this.setState({
        screenSize: this.screenSizes.mobile
      });
    }
  }

  componentDidMount() {
    Object.freeze(this.screenSizes);

    this.setScreenSize();

    window.addEventListener('resize', this.setScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenSize);
  }

  render() {
    const {
      allScreenshots,
      title,
      techLogos,
      description,
      repoLink,
      liveLink
    } = this.props;
    const { screenSize } = this.state;

    const currentScreenshots = allScreenshots[screenSize];
    return (
      <section className="Project">
        <ProjectSlideshow screenshots={currentScreenshots} />
        <h2 className="Project__title">{title}</h2>
        <TechLogos logos={techLogos} />
        <p className="Project__description">{description}</p>
        <ProjectLinks repo={repoLink} live={liveLink} />
      </section>
    );
  }
}

const screenshotsArray = PropTypes.arrayOf(
  PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
);
Project.propTypes = {
  allScreenshots: PropTypes.shape({
    mobile: screenshotsArray,
    tablet: screenshotsArray,
    desktop: screenshotsArray,
  }).isRequired,
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