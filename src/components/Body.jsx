import Profile from "./bodyComponents/Profile";
import Skills from "./bodyComponents/Skills";
import Education from "./bodyComponents/Educations";
import Projects from "./bodyComponents/Projects";

function Body() {
  return (
    <div className="body-div">
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}

export default Body;
