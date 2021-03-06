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
          repoLink,
          liveLink,
          disabled
        } = projectDetails;

        return (
          <Project
            key={`project-${projectDetails.id}`}
            title={title}
            techLogos={techLogos}
            screenshots={screenshots}
            description={description}
            repoLink={repoLink}
            liveLink={liveLink}
            disabled={disabled}
          />
        );
      })}
    </main>
  );
}

export default ProjectsPage;