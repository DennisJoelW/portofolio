import './App.css';
import "./index.css";
import {NavBar} from "./components/Navbar/Navbar"
import Expertise from './components/Expertise/Expertise';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/ProjectDetail" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
export default App;
