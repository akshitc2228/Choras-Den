import { useState } from "react";
import axios from "axios";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const RelationshipStatus = {
  SINGLE: "Single",
  CIVIL_PARTNERSHIP: "Civil partnership",
  DATING: "Dating...",
  IN_A_RELATIONSHIP: "In a relationship",
  COMPLICATED: "Complicated",
  NO_COMMENT: "No comment",
};

Object.freeze(RelationshipStatus);

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    city: "",
    dob: "",
    relationshipStatus: RelationshipStatus.NO_COMMENT,
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="registerWrapper">
      <div className="registerCard">
        <h1>REGISTER</h1>
        <form>
          <input
            onChange={handleChange}
            name="email"
            required="true"
            type="email"
            placeholder="Enter your email address"
          ></input>
          <input
            onChange={handleChange}
            name="password"
            required="true"
            type="password"
            placeholder="Create a password"
          ></input>
          <input
            onChange={handleChange}
            name="name"
            required="true"
            type="text"
            placeholder="Enter your name"
          ></input>
          <input
            onChange={handleChange}
            name="city"
            required="false"
            type="text"
            placeholder="Where're you from? (optional)"
          ></input>
          <label>Enter your Date of Birth (optional)</label>
          <input
            onChange={handleChange}
            name="dob"
            required="false"
            type="date"
            placeholder="Enter your date of birth"
          ></input>
          <label htmlFor="relationshipStatus">Relationship Status:</label>
          <select
            id="relationshipStatus"
            name="relationshipStatus"
            value={inputs.relationshipStatus}
            onChange={handleChange}
          >
            {Object.values(RelationshipStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {err && <span style={{ color: "white" }}>{err}</span>}
          <button onClick={handleClick}>Create new account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
