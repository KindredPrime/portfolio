import projectsDetails from '../projectsDetails';
import Project from '../Project/index';
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

        return (
          <Project
            key={`project-${projectDetails.id}`}
            title={title}
            techLogos={techLogos}
            screenshots={screenshots}
            description={description}
            githubLink={githubLink}
            liveLink={liveLink}
          />
        );
      })}
    </main>
  );
}

export default ProjectsPage;