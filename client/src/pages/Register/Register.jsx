import { useState } from "react";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    city: "",
    dob: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", inputs);
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
          {err && <span style={{color:"white"}}>{err}</span>}
          <button onClick={handleClick}>Create new account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
