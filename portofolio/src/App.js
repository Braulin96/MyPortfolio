import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import AboutMe from "components/AboutMe";
import MyProjects from "components/MyProjects";
import ProjectsList from "components/ProjectsList";
import Skills from "components/Skills";
import Progress from "components/Progress";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <MyProjects/>
      <ProjectsList/>
      <Skills/>
      <Progress/>
    </div>
  );
}

export default App;
