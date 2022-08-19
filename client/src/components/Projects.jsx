import jungle from "../assets/project_gifs/jungle.gif"
import "../styles/projects.scss"
export const Projects = () => {
  return(
    <div className="area-section" id="projects-section">
      <h1 className="section-header">Projects</h1>
      <div id="all-projects">
        
        <div className="project">
          <h1 className="project-title">Jungle</h1>
          <a href="https://github.com/Enired/jungle-ruby">
          <img className="project-gif" src={jungle} alt="Jungle Gif"></img>
          </a>
          <p className="project-desc">E-commerce Website called Jungle. Done as a project for Lighthouse Labs Web Dev Bootcamp</p>
        </div>

        <div className="project">
          <h1 className="project-title">Jungle</h1>
          <a href="https://github.com/Enired/jungle-ruby">
          <img className="project-gif" src={jungle} alt="Jungle Gif"></img>
          </a>
          <p className="project-desc">E-commerce Website called Jungle. Done as a project for Lighthouse Labs Web Dev Bootcamp</p>
        </div>

      </div>
    </div>
  )
}