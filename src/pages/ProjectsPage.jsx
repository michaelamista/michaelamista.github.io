import { featuredProject, projects } from "../data/projectsData";

export default function ProjectsPage() {
  return (
    <>
      <article className="post featured">
        <header className="major">
          <span className="date">Projects</span>
          <h2>{featuredProject.title}</h2>
          <p>{featuredProject.description}</p>
        </header>
        <a href={featuredProject.href} className="image main">
          <img src={featuredProject.image} alt={featuredProject.imageAlt} />
        </a>
        <ul className="actions special">
          <li>
            <a href={featuredProject.href} className="button large">
              VIEW PROJECT
            </a>
          </li>
        </ul>
      </article>

      <section className="posts">
        {projects.map((project) => (
          <article key={project.href}>
            <header>
              <h2>{project.title}</h2>
            </header>
            <a href={project.href} className="image fit">
              <img src={project.image} alt={project.imageAlt} />
            </a>
            <p>{project.description}</p>
            <ul className="actions special">
              <li>
                <a href={project.href} className="button">
                  VIEW PROJECT
                </a>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
