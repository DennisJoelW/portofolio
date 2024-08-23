import './App.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Home from './components/Home/Home';
import Resepku from './components/Resepku/Resepku';
import ScrollToTop from './ScollToTop';
import SneakerApp from './components/SneakerApp/SneakerApp';
import Smartchat from './components/Smartchat/Smartchat';

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
          <Route path="/Smartchat" element={<Smartchat />} />
        </Routes>
    </div>
  );
}
export default App;
