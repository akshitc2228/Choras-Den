import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginWrapper">
      <div className="loginRight">
        <div className="iconHolder">
          <img src={require("./icon2.png")} alt="" className="logoImg"></img>
          <h1>Chora's Den</h1>
        </div>
        <form>
          <input placeholder="E-mail" type="email"></input>
          <input placeholder="Password" type="password" min={8}></input>
          <div className="buttonContainer">
            <button className="loginButton">Log-In</button>
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
