import "./styles/app.css";
import GeneralInformation from "./components/general-information.jsx";
import Education from "./components/education.jsx";
import WorkExperience from "./components/work-experience.jsx";

function App() {
  return(
    <>
      <div className="information-container">
        <GeneralInformation />
        <Education />
        <WorkExperience />
      </div>
    </>
  );
}

export default App;
