import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ProjectLinks from './index';

describe('ProjectLinks Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectLinks repo="" live="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders content as expected', () => {
    render(
      <ProjectLinks
        repo="https://www.repo.com"
        live="https://www.live.com"
      />
    );

    expect(document.body).toMatchSnapshot();
  });
});