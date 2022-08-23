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
  
  const currentRef = useRef(null)
  
  const executeScroll = () => {
    autoScroll(currentRef)
  }


  return (
    <div className="App">
      <TopNav autoScroll={autoScroll} currentRef={currentRef} executeScroll={executeScroll}/>
      <div id="main-area">
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact currentRef={currentRef}/>
      </div>
    </div>
  );
}

export default App;
