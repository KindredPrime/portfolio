import projectsDetails from '../projectsDetails';
import './index.css';

function ProjectsPage() {
  return (
    <main className="ProjectsPage">
      <header>
        <h1>Ken's Projects</h1>
      </header>

      {projectsDetails.map((projectDetails) => {
        const {
          title,
          techLogos,
          screenshots,
          description,
          githubLink,
          liveLink
        } = projectDetails;
        const screenshotSrc = screenshots[0].src;
        const screenshotAlt = screenshots[0].alt;

        return (
          <section key={`project-${projectDetails.id}`} className="ProjectsPage__Project">
            <img src={screenshotSrc} alt={screenshotAlt} />
            <p>{title}</p>
            {techLogos.map((techLogo) => {
              const {src, alt, classNames} = techLogo;
              return (
                <img
                  key={techLogo.id}
                  src={src}
                  alt={alt}
                  className={classNames}
                />
              );
            })}
            <p>{description}</p>
            <p>{githubLink}</p>
            <p>{liveLink}</p>
          </section>
        );
      })}
    </main>
  );
}

export default ProjectsPage;