import "../styles/form.css";
import { useState } from "react";

/**
 * TODO: add props for functionality
 */
function WorkExperience() {
  const [companyName, setcompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [datesWorked, setDateWorked] = useState("");
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

    console.log(companyName, position, responsibilities, datesWorked);
  };

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>

      <form className={submitted ? "hidden" : null}>
        <div>
          <label>Company Name </label>
          <input
            type="text"
            onChange={(e) => setcompanyName(e.target.value)}
            value={companyName ? companyName : ""}
          ></input>
        </div>

        <div>
          <label>Position: </label>
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            value={position ? position : ""}
          ></input>
        </div>

        <div>
          <label>Responsibilities: </label>
          <input
            type="text"
            onChange={(e) => setResponsibilities(e.target.value)}
            value={responsibilities ? responsibilities : ""}
          ></input>
        </div>

        <div>
          <label>Dates Worked: </label>
          <input
            type="text"
            onChange={(e) => setDateWorked(e.target.value)}
            value={datesWorked ? datesWorked : ""}
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

export default WorkExperience;
