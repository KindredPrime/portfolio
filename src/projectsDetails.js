import htmlLogo from './images/html-logo.png';
import cssLogo from './images/css-logo.png';
import reactLogo from './images/react-logo.png';
import nodeLogo from './images/nodejs-logo.png';
import postgresqlLogo from './images/postgresql-logo.png';
import jqueryLogo from './images/jquery-logo.png';
import volunteerFinderHomepage
  from './images/volunteer-finder/homepage-mobile.png';
import volunteerFinderSearch
  from './images/volunteer-finder/search-page-with-results-tablet.png';
import volunteerFinderOrganization
  from './images/volunteer-finder/organization-page-top-half-desktop.png';
import volunteerFinderAddPageTop
  from './images/volunteer-finder/add-page-top-half-tablet.png';
import volunteerFinderAddPageBottom
  from './images/volunteer-finder/add-page-bottom-half-tablet.png';
import exploreWildlifeAbout
  from './images/explore-wildlife-screenshots/about.png';
import exploreWildlifeAddressSearch
  from './images/explore-wildlife-screenshots/address-parameters.png';
import exploreWildlifeAddressResults
  from './images/explore-wildlife-screenshots/address-search-results.png';
import exploreWildlifeMainSearch
  from './images/explore-wildlife-screenshots/wildlife-parameters.png';
import exploreWildlifeFinalResults
  from './images/explore-wildlife-screenshots/wildlife-search-results.png';

const allTechLogos = {
  html: {
    id: 1,
    src: htmlLogo,
    alt: 'HTML5',
    classNames: 'TechLogos__html'
  },
  css: {
    id: 2,
    src: cssLogo,
    alt: 'CSS3',
    classNames: 'TechLogos__css'
  },
  react: {
    id: 3,
    src: reactLogo,
    alt: 'React.js',
    classNames: 'TechLogos__react'
  },
  node: {
    id: 4,
    src: nodeLogo,
    alt: 'Node.js',
    classNames: 'TechLogos__node'
  },
  postgresql: {
    id: 5,
    src: postgresqlLogo,
    alt: 'PostgreSQL',
    classNames: 'TechLogos__postgresql'
  },
  jquery: {
    id: 6,
    src: jqueryLogo,
    alt: 'jQuery',
    classNames: 'TechLogos__jquery'
  }
}

const projectDetails = [
  {
    id: 1,
    title: 'VolunteerFinder',
    techLogos: [
      allTechLogos.html,
      allTechLogos.css,
      allTechLogos.react,
      allTechLogos.node,
      allTechLogos.postgresql
    ],
    screenshots: [
      {
        src: volunteerFinderHomepage,
        alt: 'Welcome to VolunteerFinder (mobile view)'
      },
      {
        src: volunteerFinderSearch,
        alt: 'Search page with results (tablet view)'
      },
      {
        src: volunteerFinderOrganization,
        alt: 'Organization page (desktop view)'
      },
      {
        src: volunteerFinderAddPageTop,
        alt: 'Top of add organization page (tablet view)'
      },
      {
        src: volunteerFinderAddPageBottom,
        alt: 'Bottom of add organization page (tablet view)'
      },
    ],
    description: `
      VolunteerFinder helps people find organizations in the DC metropolitan
      area where people can volunteer to help.  Users can search by
      organization name, address, description, and what cause(s) the
      organization supports. If there's an organization that isn't listed in
      this app, it can be added with its name, contact information,
      description, and the cause(s) it supports.
    `,
    repoLink: 'https://github.com/KindredPrime/volunteer-finder',
    liveLink: 'https://volunteer-finder.vercel.app/'
  },
  {
    id: 2,
    title: 'Explore Wildlife',
    techLogos: [
      allTechLogos.html,
      allTechLogos.css,
      allTechLogos.jquery
    ],
    screenshots: [
      {
        src: exploreWildlifeAbout,
        alt: 'About Explore Wildlife (desktop view)'
      },
      {
        src: exploreWildlifeAddressSearch,
        alt: 'Explore Wildlife address search parameters (mobile view)'
      },
      {
        src: exploreWildlifeAddressResults,
        alt: 'Explore Wildlife address search results (tablet view)'
      },
      {
        src: exploreWildlifeMainSearch,
        alt: 'Explore Wildlife main search parameters (tablet view)'
      },
      {
        src: exploreWildlifeFinalResults,
        alt: 'Explore Wildlife final search results (tablet view)'
      }
    ],
    description: `
      The Explore Wildlife App helps people discover what kinds of wildlife
      have been seen in locations worldwide. Users can refine their search by
      specifying which types of wildlife they want to see (Mammals, Plants,
      Fish, Fungi, etc.), searching for a particular species by name, and/or
      setting a time period during which the wildlife were seen. Each result
      includes pictures of the organism, a brief exerpt from the Wikipedia page
      about the organism, and a link to the Wikipedia page.
    `,
    repoLink: 'https://github.com/KindredPrime/explore-wildlife',
    liveLink: 'https://kindredprime.github.io/explore-wildlife/'
  }
];

export default projectDetails;