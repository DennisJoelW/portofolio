import "../../App.css"
import "../../index.css";
import { NavBar } from "../Navbar/Navbar";
import Expertise from "../Expertise/Expertise";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";

function Home() {
  return (
    <div className="Home">
      <NavBar/>
      <Expertise />
      <Skills />
      <Project />
    </div>
  );
}

export default Home;