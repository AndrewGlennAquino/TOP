import "../styles/general-information.css";
import { useState } from "react";

function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="general-information-container">
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Phone number: </label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default GeneralInformation;
