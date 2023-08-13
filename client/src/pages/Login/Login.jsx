import "./login.scss";

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
          <button>Log-In</button>
          <button>New member? Register here</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
