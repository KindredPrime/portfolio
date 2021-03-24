// Technology logos
import htmlLogo from './images/tech-logos/html.png';
import cssLogo from './images/tech-logos/css.png';
import reactLogo from './images/tech-logos/react.png';
import nodeLogo from './images/tech-logos/nodejs.png';
import postgresqlLogo from './images/tech-logos/postgresql.png';
import jqueryLogo from './images/tech-logos/jquery.png';

// VolunteerFinder screenshots
import volunteerFinderHomepage
  from './images/screenshots/volunteer-finder/homepage-mobile.png';
import volunteerFinderSearch
  from './images/screenshots/volunteer-finder/search-page-with-results-tablet.png';
import volunteerFinderOrganization
  from './images/screenshots/volunteer-finder/organization-page-top-half-desktop.png';
import volunteerFinderAddPageTop
  from './images/screenshots/volunteer-finder/add-page-top-half-tablet.png';
import volunteerFinderAddPageBottom
  from './images/screenshots/volunteer-finder/add-page-bottom-half-tablet.png';

// Explore Wildlife screenshots
import exploreWildlifeAbout
  from './images/screenshots/explore-wildlife/about.png';
import exploreWildlifeAddressSearch
  from './images/screenshots/explore-wildlife/address-parameters.png';
import exploreWildlifeAddressResults
  from './images/screenshots/explore-wildlife/address-search-results.png';
import exploreWildlifeMainSearch
  from './images/screenshots/explore-wildlife/wildlife-parameters.png';
import exploreWildlifeFinalResults
  from './images/screenshots/explore-wildlife/wildlife-search-results.png';

// Game of Thrones Quiz screenshots
import gotQuizStartPage from './images/screenshots/got-quiz/start-page.png';
import gotQuizQuestionPage
  from './images/screenshots/got-quiz/question-page.png';
import gotQuizCorrectAnswerPage
  from './images/screenshots/got-quiz/correct-answer-page.png';
import gotQuizWrongAnswerPage
  from './images/screenshots/got-quiz/wrong-answer-page.png';
import gotQuizResultsPage
  from './images/screenshots/got-quiz/results-page.png';

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
    liveLink: 'https://volunteer-finder.vercel.app/',
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
  },
  {
    id: 3,
    title: 'Game of Thrones Quiz',
    techLogos: [
      allTechLogos.html,
      allTechLogos.css,
      allTechLogos.jquery
    ],
    screenshots: [
      {
        src: gotQuizStartPage,
        alt: 'Game of Thrones Quiz start page'
      },
      {
        src: gotQuizQuestionPage,
        alt: 'Game of Thrones Quiz question page'
      },
      {
        src: gotQuizCorrectAnswerPage,
        alt: 'Game of Thrones Quiz correct answer page'
      },
      {
        src: gotQuizWrongAnswerPage,
        alt: 'Game of Thrones Quiz wrong answer page'
      },
      {
        src: gotQuizResultsPage,
        alt: 'Game of Thrones Quiz results page'
      }
    ],
    description: `
      This is an interactive web app that allows users to take a quiz about the
      Game of Thrones book series. The app goes through questions one by one,
      rendering them in a <form> element, and keeps track of the question
      number and the user’s score. The app also tells the user the correct
      answer to the question after they pick their answer. When the quiz is
      over, the app tells the user their final score and allows them to restart
      the quiz. The app uses responsive design, semantic HTML, and it follows
      a11y best practices.
    `,
    repoLink: 'https://github.com/KindredPrime/quiz-app',
    liveLink: 'https://kindredprime.github.io/quiz-app/'
  }
];

export default projectDetails;