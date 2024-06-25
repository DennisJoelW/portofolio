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
import SneakerApp from './components/SneakerApp/SneakerApp';

function App() {
  return (
    <div className="App">
        <ScrollToTop/>

        <Routes>
          <Route path="/portofolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/ProjectDetail" element={<ProjectDetail />} />
          <Route path="/Resepku" element={<Resepku />} />
          <Route path="/Sneakerz" element={<SneakerApp />} />
        </Routes>
    </div>
  );
}
export default App;
