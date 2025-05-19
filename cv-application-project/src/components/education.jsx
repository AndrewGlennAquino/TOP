import "../styles/form.css";
import { useState } from "react";

/**
 * TODO: add props for functionality
 */
function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [graduation, setGraduation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /**
   *  TODO: add funcitonality to edit
   */
  const handleEdit = (e) => {
    e.preventDefault();

    setSubmitted(false);
  };

  /**
   * TODO: add functionality to submit
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    console.log(schoolName, major, graduation);
  };

  return (
    <div className="education-container">
      <h2>Education</h2>

      <form className={submitted ? "hidden" : null}>
        <div>
          <label>School Name: </label>
          <input
            type="text"
            onChange={(e) => setSchoolName(e.target.value)}
            value={schoolName ? schoolName : ""}
          ></input>
        </div>

        <div>
          <label>Major: </label>
          <input
            type="text"
            onChange={(e) => setMajor(e.target.value)}
            value={major ? major : ""}
          ></input>
        </div>

        <div>
          <label>Date Graduated: </label>
          <input
            type="text"
            onChange={(e) => setGraduation(e.target.value)}
            value={graduation ? graduation : ""}
          ></input>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>

      <button
        className={`edit ${submitted ? "" : "hidden"}`}
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
}

export default Education;
