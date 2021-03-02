import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from './';

describe('Nav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays the menu links when the menu button is clicked', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText('☰'));

    expect(document.body).toMatchSnapshot();
  });
});