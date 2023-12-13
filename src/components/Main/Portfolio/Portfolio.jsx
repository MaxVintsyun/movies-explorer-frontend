import { projects } from "../../../utils/constants";

function Portfolio () {
    return(
        <section className="portfolio container">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__projects">
                {projects.map((project) => (
                    <a className="portfolio__project" key={project.id} href={project.link} target="_blank" rel="noreferrer">
                        <p className="portfolio__project-name">{project.title} <span className="portfolio__link-icon">↗</span></p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;