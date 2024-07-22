import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginRight">
        <div className="iconHolder">
          <img src={require("./icon2.png")} alt="" className="logoImg"></img>
          <h1>Chora's Den</h1>
        </div>
        <form>
          <input
            name="email"
            onChange={handleChange}
            placeholder="E-mail"
            type="email"
          ></input>
          <input
            name="password"
            onChange={handleChange}
            placeholder="Password"
            type="password"
            min={8}
          ></input>
          <div className="buttonContainer">
            {err && <span style={{color:"white"}}>{err}</span>}
            <button className="loginButton" onClick={handleLogin}>
              Log-In
            </button>
            <Link to="/register">
              <button className="registerButton">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
