import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectSlideshow from './index';
import testScreenshot from '../images/test.png';

function renderNextImage(testScreenshots) {
  render(
    <ProjectSlideshow screenshots={testScreenshots} />
  );

  userEvent.click(screen.getByAltText('next screenshot'));
}

describe('ProjectSlideshow Component', () => {
  const testScreenshots = [
    {
      src: testScreenshot,
      alt: 'First test screenshot'
    },
    {
      src: testScreenshot,
      alt: 'Middle test screenshot'
    },
    {
      src: testScreenshot,
      alt: 'Last test screenshot'
    }
  ];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectSlideshow screenshots={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the content as expected', () => {
    render(
      <ProjectSlideshow screenshots={testScreenshots} />
    );

    expect(document.body).toMatchSnapshot();
  });

  it('renders both arrow buttons when a middle snapshot is rendered', () => {
    renderNextImage(testScreenshots);

    expect(screen.getByAltText('next screenshot')).toBeInTheDocument();
    expect(screen.getByAltText('previous screenshot')).toBeInTheDocument();
  });

  it(
    'renders only the left arrow when the last of multiple screenshots is rendered',
    () => {
      renderNextImage([testScreenshots[0], testScreenshots[1]]);

      expect(screen.getByAltText('previous screenshot')).toBeInTheDocument();
      expect(screen.queryByAltText('next button')).toEqual(null);
    });

  it(`renders no arrow buttons when there's only one screenshot`, () => {
    render(
      <ProjectSlideshow screenshots={[testScreenshots[0]]} />
    );

    expect(screen.queryByRole('button')).toEqual(null);
  });

  it(
    'renders the next screenshot when the right arrow button is clicked',
    () => {
      renderNextImage(testScreenshots);
      expect(document.body).toMatchSnapshot();
    });

  it(
    'renders the previous screenshot when the left arrow button is clicked',
    () => {
      renderNextImage(testScreenshots);
      userEvent.click(screen.getByAltText('previous screenshot'));
      expect(document.body).toMatchSnapshot();
    });
});