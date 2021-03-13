import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Project from './index';
import mobileScreenshot from '../images/testing/mobile.png';
import tabletScreenshot from '../images/testing/tablet.png';
import desktopScreenshot from '../images/testing/desktop.png';

function resizeWidth(x) {
  window.innerWidth = x;
  window.dispatchEvent(new Event('resize'));
}

describe('Project Component', () => {
  const blankScreenshots = {
    mobile: [],
    tablet: [],
    desktop: []
  };

  const testScreenshots = {
    mobile: [{
      src: mobileScreenshot,
      alt: 'Mobile screenshot'
    }],
    tablet: [{
      src: tabletScreenshot,
      alt: 'Tablet screenshot'
    }],
    desktop: [{
      src: desktopScreenshot,
      alt: 'Desktop screenshot'
    }]
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Project
        allScreenshots={blankScreenshots}
        title=""
        techLogos={[]}
        description=""
        repoLink=""
        liveLink=""
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders content as expected', () => {
    render(<Project
      allScreenshots={blankScreenshots}
      title="Test Title"
      techLogos={[]}
      description="Test description"
      repoLink="https://www.repo.com"
      liveLink="https://www.live.com"
    />);

    expect(document.body).toMatchSnapshot();
  });

  it('only renders mobile screenshots on mobile-sized screens', () => {
    resizeWidth(500);

    render(<Project
      allScreenshots={testScreenshots}
      title="Test Title"
      techLogos={[]}
      description="Test description"
      repoLink="https://www.repo.com"
      liveLink="https://www.live.com"
    />);

    expect(screen.getByAltText(testScreenshots.mobile[0].alt)).toBeInTheDocument();
  });

  it('only renders tablet screenshots on tablet-sized screens', () => {
    resizeWidth(690);

    render(<Project
      allScreenshots={testScreenshots}
      title="Test Title"
      techLogos={[]}
      description="Test description"
      repoLink="https://www.repo.com"
      liveLink="https://www.live.com"
    />);

    waitFor(() => expect(screen.getByAltText(testScreenshots.tablet[0].alt)).toBeInTheDocument());
  });

  it('only renders desktop screenshots on desktop-sized screens', () => {
    resizeWidth(1000);

    render(<Project
      allScreenshots={testScreenshots}
      title="Test Title"
      techLogos={[]}
      description="Test description"
      repoLink="https://www.repo.com"
      liveLink="https://www.live.com"
    />);

    waitFor(() => expect(screen.getByAltText(testScreenshots.desktop[0].alt)).toBeInTheDocument());
  });
});