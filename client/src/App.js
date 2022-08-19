import logo from './logo.svg';
import "./styles/app.scss"

//Importing my components
import { TopNav} from './components/TopNav';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <div id="main-area">
      <AboutMe/>
      <Skills/>
      <Projects/>
      </div>
    </div>
  );
}

export default App;
