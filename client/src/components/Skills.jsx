//Importing Logos
import javascriptLogo from "../assets/skills_icons/javascript.png"
import rubyLogo from "../assets/skills_icons/ruby.png"
import reactLogo from "../assets/skills_icons/react.webp"
import pythonLogo from "../assets/skills_icons/python.png"
import nodeLogo from "../assets/skills_icons/nodejs.webp"
import storybookLogo from "../assets/skills_icons/storybook.png"
import bootstrapLogo from "../assets/skills_icons/bootstrap.png"
import cypressLogo from "../assets/skills_icons/cypress.png"
import jestLogo from "../assets/skills_icons/jest.png"
import jqueryLogo from "../assets/skills_icons/jquery.png"
import materialUILogo from "../assets/skills_icons/MaterialUI.png"
import postgressqlLogo from "../assets/skills_icons/postgresql.png"
import railsLogo from "../assets/skills_icons/rubyonrails.png"
import sassLogo from "../assets/skills_icons/sass.webp"
import sqlLogo from "../assets/skills_icons/sql.webp"
import gitLogo from "../assets/skills_icons/git.png"


//Import Style
import "../styles/skills.scss"

export const Skills = (props) => {

  return(
    <div className="area-section" id="skills-section" ref={props.skillsRef}>
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
          <p className="skill-tag">Storybook</p>
        </div>

        <div className="skill">
          <img src={bootstrapLogo} alt="Bootstrap" className="skill-logo" />
          <p className="skill-tag">Bootstrap</p>
        </div>

        <div className="skill">
          <img src={cypressLogo} alt="Cypress" className="skill-logo" />
          <p className="skill-tag">Cypress</p>
        </div>

        <div className="skill">
          <img src={jestLogo} alt="Jest" className="skill-logo" />
          <p className="skill-tag">Jest</p>
        </div>

        <div className="skill">
          <img src={jqueryLogo} alt="JQuery" className="skill-logo" />
          <p className="skill-tag">JQuery</p>
        </div>

        <div className="skill">
          <img src={materialUILogo} alt="Material UI" className="skill-logo" />
          <p className="skill-tag">Material UI</p>
        </div>

        <div className="skill">
          <img src={postgressqlLogo} alt="PostgreSQL" className="skill-logo" />
          <p className="skill-tag">PostgreSQL</p>
        </div>
        <div className="skill">
          <img src={sqlLogo} alt="SQL" className="skill-logo" />
          <p className="skill-tag">SQL</p>
        </div>

        <div className="skill">
          <img src={railsLogo} alt="Rails" className="skill-logo" />
          <p className="skill-tag">Rails</p>
        </div>

        <div className="skill">
          <img src={sassLogo} alt="SASS" className="skill-logo" />
          <p className="skill-tag">SASS</p>
        </div>

        <div className="skill">
          <img src={gitLogo} alt="Git" className="skill-logo" />
          <p className="skill-tag">Git</p>
        </div>

      </div>
    </div>
  )
}