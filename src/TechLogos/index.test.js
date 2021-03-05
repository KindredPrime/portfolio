import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import volunteerFinderHomepage
  from '../images/volunteer-finder/homepage-mobile.png';
import TechLogos from './index';

describe('TechLogos Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TechLogos
        logos={[
          {
            id: 1,
            src: '',
            alt: '',
            classNames: ''
          }
        ]}
      />,
      div
    );
  });

  it('renders as expected', () => {
    render(
      <TechLogos
        logos={[
          {
            id: 1,
            src: volunteerFinderHomepage,
            alt: 'Test alt',
            classNames: 'Test class names'
          }
        ]}
      />
    );

    expect(document.body).toMatchSnapshot();
  });
});