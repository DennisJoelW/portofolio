import './App.css';
import "./index.css";
import {NavBar} from "./components/Navbar/Navbar"
import Expertise from './components/Expertise/Expertise';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Expertise />
    </div>
  );
}

export default App;
