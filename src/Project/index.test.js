import ReactDOM from 'react-dom';
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

  //it('renders content as expected', () => {});
});