import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Project from './index';

describe('Project Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Project
        screenshots={[]}
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
      screenshots={[]}
      title="Test Title"
      techLogos={[]}
      description="Test description"
      repoLink="https://www.repo.com"
      liveLink="https://www.live.com"
    />);

    expect(document.body).toMatchSnapshot();
  });
});