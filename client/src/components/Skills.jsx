//Importing Logos
import javascriptLogo from "../assets/skills_icons/javascript.png"
import rubyLogo from "../assets/skills_icons/ruby.png"
import reactLogo from "../assets/skills_icons/react.webp"

//Import Style
import "../styles/skills.scss"

export const Skills = () => {

  return(
    <div className="area-section" id="skills-section">
      <h1 className="section-header">Skills</h1>
      <div id="skills-icons">

        <div className="skill">
          <img src={javascriptLogo} alt="Javascript" className="skill-logo" />
          <p className="skill-tag">Javascript</p>
        </div>

        <div className="skill">
          <img src={rubyLogo} alt="Ruby" className="skill-logo" />
          <p className="skill-tag">Ruby</p>
        </div>
        
        <div className="skill">
          <img src={reactLogo} alt="React" className="skill-logo" />
          <p className="skill-tag">React</p>
        </div>

      </div>
    </div>
  )
}