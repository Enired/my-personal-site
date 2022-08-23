//Importing project demo gifs
import jungle from "../assets/project_gifs/jungle.gif"
import ddsFood from "../assets/project_gifs/dds-food.gif"
import paperAirplanes from "../assets/project_gifs/paper-airplanes.gif"
import scheduler from "../assets/project_gifs/scheduler.gif"

//Import Style
import "../styles/projects.scss"

export const Projects = () => {
  return(
    <div className="area-section" id="projects-section">
      <h1 className="section-header">Projects</h1>
      <div id="all-projects">
        
        {/* Paper Airplanes Project */}
        <div className="project">
          <h1 className="project-title">Paper Airplanes</h1>
          <a href="https://github.com/Enired/paper-airplanes">
          <img className="project-gif" src={paperAirplanes} alt="Paper Airplanes Gif"></img>
          </a>
          <p className="project-desc">Interaction app allows users to anonymously seek advice, vent their issues, and provide positive messages to other users. Users are able to provide advice to letters written by other users and are able to view advice responses to letters written by themselves. Inappropriate flagging functionality and Tensorflow model used to limit number of negative/inappropriate messages present throughout the app.</p>
        </div>

        {/* Scheduler Project*/}
        <div className="project">
          <h1 className="project-title">DDS-Food</h1>
          <a href="https://github.com/Enired/dds-food">
          <img className="project-gif" src={ddsFood} alt="DDS-Food Gif"></img>
          </a>
          <p className="project-desc">Food pick-up ordering app that allows a customer to create and submit an order for pick-up from a restaurant. SMS notifications are sent to both the customer and the restaurant about the order and it's status.</p>
        </div>

        {/* DDS-Food Project */}
        <div className="project">
          <h1 className="project-title">Scheduler</h1>
          <a href="https://github.com/Enired/scheduler">
          <img className="project-gif" src={scheduler} alt="Scheduler Gif"></img>
          </a>
          <p className="project-desc">React webapp for users to schedule interviews for students with different interviewers based on availability⏰. The navigation bar will display number of time slots available for the respective days. Users will be able to book, edit, and cancel interviews. If there are any errors, appropriate messages will be displayed.</p>
        </div>

        {/* Jungle Project */}
        <div className="project">
          <h1 className="project-title">Jungle</h1>
          <a href="https://github.com/Enired/jungle-ruby">
          <img className="project-gif" src={jungle} alt="Jungle Gif"></img>
          </a>
          <p className="project-desc">E-commerce website inspired by Amazon in which users can purchase plants. Done as a project for Lighthouse Labs Web Dev Bootcamp</p>
        </div>

      </div>
    </div>
  )
}