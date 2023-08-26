import "./register.scss";

const Register = () => {
  return (
    <div className="registerWrapper">
      <div className='registerCard'>
        <h1>REGISTER</h1>
        <form>
            <input required="true" type='email' placeholder='Enter your email address'></input>
            <input required="true" type='password' placeholder='Create a password'></input>
            <input required="true" type='text' placeholder='Enter your name'></input>
            <input required="false" type='text' placeholder="Where're you from? (optional)"></input>
            <label>Enter your Date of Birth (optional)</label>
            <input required="false" type='date' placeholder='Enter your date of birth'></input>
            <button>Create new account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
