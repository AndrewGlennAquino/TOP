import "../styles/general-information.css";
import { useState } from "react";

function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="general-information-container">
      <form>
        <div>
          <label>Name: </label>
          <input type="text" className="input-box"></input>
        </div>

        <div>
          <label>Email: </label>
          <input type="text" className="input-box"></input>
        </div>

        <div>
          <label>Phone number: </label>
          <input type="text" className="input-box"></input>
        </div>
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default GeneralInformation;
