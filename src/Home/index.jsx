import { Link } from 'react-router-dom';
import headshot from '../images/headshot-photo.jpg';
import './index.css';

function Home() {
  return (
    <main className="Home">
      <p className="Home__headline">
        My name is Ken Wright and I enjoy writing code that manipulates data
        and data structures.
      </p>

      <Link className="button-look-alike" to="/projects">Projects</Link>

      <section className="bio">
        <img src={headshot} alt="Headshot" className="Home__headshot" />
        <h2 className="bio-header">A little more about me</h2>
        <p className="bio-text">
          I love writing code.  It gives me an opportunity to flex my
          creativity muscles by writing code that is flexible, easy to
          understand, and easy to build on top of.  Writing code also gives me
          an opportunity to work with other programmers to come up with
          interesting solutions to complex problems. I mostly work with
          JavaScript, and I use Git to track changes.
        </p>
        <p className="bio-text">
          Outside of writing code, I enjoy: making sculptures of animals,
          walking in parks and on nature paths, playing video games, and
          volunteering for community organizations. And I enjoy finding new
          activities, interests, and hobbies.
        </p>
      </section>
    </main>
  );
}

export default Home;