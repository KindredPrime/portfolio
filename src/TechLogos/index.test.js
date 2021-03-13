import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import testLogo from '../images/testing/test.png';
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
            src: testLogo,
            alt: 'Test alt',
            classNames: 'Test class names'
          }
        ]}
      />
    );

    expect(document.body).toMatchSnapshot();
  });
});