import React from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import './index.css';

class ProjectSlideshow extends React.Component {
  state = {
    currentIndex: 0
  };

  nextScreenshot = () => {
    const { currentIndex } = this.state;

    this.setState({
      currentIndex: currentIndex + 1
    });
  }

  prevScreenshot = () => {
    const { currentIndex } = this.state;

    this.setState({
      currentIndex: currentIndex - 1
    });
  }

  render() {
    const { screenshots } = this.props;
    const { currentIndex } = this.state;

    const current = screenshots[currentIndex];

    return (
      <div className="ProjectSlideshow">
        {current &&
          <img
            src={current.src}
            alt={current.alt}
            className="ProjectSlideshow__screenshot"
          />}

        {/*
          Previous screenshot
        */}
        {currentIndex > 0 &&
          <button
            type="button"
            className="ProjectSlideshow__button left"
            onClick={this.prevScreenshot}
          >
            <img
              src={leftArrow}
              alt="previous screenshot"
              className="ProjectSlideshow__arrow"
            />
          </button>}

        {/*
          Next screenshot
        */}
        {currentIndex < screenshots.length - 1 &&
          <button
            type="button"
            className="ProjectSlideshow__button right"
            onClick={this.nextScreenshot}
          >
            <img
              src={rightArrow}
              alt="next screenshot"
              className="ProjectSlideshow__arrow"
            />
          </button>}
      </div>
    );
  }
}

ProjectSlideshow.propTypes = {
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ProjectSlideshow;