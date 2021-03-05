import ReactDOM from 'react-dom';
import ProjectLinks from './index';

describe('ProjectLinks Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectLinks repo="" live="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});