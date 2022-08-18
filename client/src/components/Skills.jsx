//Importing Logos
import javascriptLogo from "../assets/skills_icons/javascript.png"
import rubyLogo from "../assets/skills_icons/ruby.png"
import reactLogo from "../assets/skills_icons/react.webp"
import pythonLogo from "../assets/skills_icons/python.png"
import nodeLogo from "../assets/skills_icons/nodejs.webp"
import storybookLogo from "../assets/skills_icons/storybook.png"


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
          <img src={reactLogo} alt="ReactJS" className="skill-logo" />
          <p className="skill-tag">ReactJS</p>
        </div>

        <div className="skill">
          <img src={rubyLogo} alt="Ruby" className="skill-logo" />
          <p className="skill-tag">Ruby</p>
        </div>
        

        <div className="skill">
          <img src={pythonLogo} alt="Python" className="skill-logo" />
          <p className="skill-tag">Python</p>
        </div>
        
        <div className="skill">
          <img src={nodeLogo} alt="NodeJS" className="skill-logo" />
          <p className="skill-tag">NodeJS</p>
        </div>

        <div className="skill">
          <img src={storybookLogo} alt="Express" className="skill-logo" />
          <p className="skill-tag">Express</p>
        </div>

      </div>
    </div>
  )
}