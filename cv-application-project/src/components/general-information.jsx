import "../styles/form.css";
import { useState } from "react";

/**
 * TODO: add props for functionality
 */
function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

    console.log(name, email, phone);
  };

  return (
    <div className="general-information-container">
      <h2>General Information</h2>

      <form className={submitted ? "hidden" : null}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name ? name : ""}
          ></input>
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email ? email : ""}
          ></input>
        </div>

        <div>
          <label>Phone number: </label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone ? phone : ""}
          ></input>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>

      <button
        className={`edit ${submitted ? null : "hidden"}`}
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
}

export default GeneralInformation;
