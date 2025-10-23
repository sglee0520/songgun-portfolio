function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
