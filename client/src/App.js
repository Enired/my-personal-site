import logo from './logo.svg';
import "./styles/app.scss"
import { useRef } from 'react';
//Importing my components
import { TopNav} from './components/TopNav';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {

  const autoScroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  const aboutMeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  
  // const executeScroll = () => {
  //   autoScroll(currentRef)
  // }


  return (
    <div className="App">
      <TopNav 
      autoScroll={autoScroll} 

      aboutMeRef={aboutMeRef}
      skillsRef={skillsRef}
      projectRef={projectRef}
      contactRef={contactRef}

      />
      <div id="main-area">
      <AboutMe aboutMeRef={aboutMeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectRef={projectRef}/>
      <Contact contactRef={contactRef}/>
      </div>
    </div>
  );
}

export default App;
