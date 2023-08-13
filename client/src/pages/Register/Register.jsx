import "./register.scss";

const Register = () => {
  return (
    <div className="registerWrapper">
      <div className='registerCard'>
        <h1>REGISTER</h1>
        <form>
            <input required="true" type='email' placeholder='Enter your email address'></input>
            <input required="true" type='password' placeholder='Enter your password'></input>
            <input required="true" type='text' placeholder='Enter a username'></input>
            <input required="true" type='text' placeholder='Enter your first name'></input>
            <input required="true" type='text' placeholder='Enter your last name'></input>
            <input type='date' placeholder='Enter your date of birth'></input>
            <button>Create new account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
