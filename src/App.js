import './App.css';
import "./index.css";
import {NavBar} from "./components/Navbar/Navbar"
import Expertise from './components/Expertise/Expertise';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Expertise />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
