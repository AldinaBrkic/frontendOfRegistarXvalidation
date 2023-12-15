import "./App.css";
import FormInput from "./components/FormInput";
import { useState } from "react";


const App = () => {
  const [values, setValues] = useState({
    username:"",
    text:"",
    email:"",
    password:"",
    confirmPass:"",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't have any special character!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder:"example@gmail.com",
      errorMessage:"It should be valid email address!",
      label:"Email",
      pattern:"^[A-Za-z0-9]{3-16}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder:"******",
      errorMessage:"Password should be 6-20 characters and should include at least 1 letter, 1 number and one special character!",
      label:"Password",
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$',
      required: true,
    },
    {
      id: 4,
      name: "confirmPass",
      type: "password",
      placeholder:"******",
      errorMessage:"Passwords didn't match!",
      label:"Confirm password",
      pattern: values.password,
      required: true,
    }
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
    return <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          {inputs.map(input=>(
             <FormInput 
             key={input.id}
            {...input} 
            value={values[input.name]} 
            onChange={onChange}/>
          ))}
            <button>Register</button>
            <p>Already have an account? 
              <div type="button" className="Login">LogIn</div>
            </p>
        </form>
    </div>
}

export default App;