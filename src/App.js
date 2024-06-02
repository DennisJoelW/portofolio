import './App.css';
import "./index.css";
import {NavBar} from "./components/Navbar/Navbar"
import Expertise from './components/Expertise/Expertise';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Home from './components/Home/Home';
import Resepku from './components/Resepku/Resepku';
import ScrollToTop from './ScollToTop';

function App() {
  return (
    <div className="App">
        <ScrollToTop/>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/ProjectDetail" element={<ProjectDetail />} />
          <Route path="/Resepku" element={<Resepku />} />
        </Routes>
    </div>
  );
}
export default App;
