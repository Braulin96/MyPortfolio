import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";
import AboutMe from "components/AboutMe";
import MyProjects from "components/MyProjects";
import ProjectsList from "components/ProjectsList";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <MyProjects/>
      <ProjectsList/>
    </div>
  );
}

export default App;
