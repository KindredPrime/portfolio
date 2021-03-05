import ReactDOM from 'react-dom';
import ProjectsPage from './index';

describe('ProjectsPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});