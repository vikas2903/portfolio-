import React, {useState,useEffect} from 'react'
import "../../assets/css/login.css"
import {app} from "../../firebase"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

function Login() {

    const auth = getAuth(app);
    function registerUser (){
        createUserWithEmailAndPassword(auth, "abc@gmail.com", "123456")
    }
    


const [pageslide, setpageslide] = useState(false);
const [register, setregister] = useState({
    username: "",
    email: "",
    password: "",
});

function handleChange(e) {
    const {name, value} = e.target;
    setregister({...register, [name]: value});
}
function handleSubmit(e) {
    e.preventDefault();
    console.log(register);
}
useEffect(() =>{

    registerUser();
}, [])
  return (
    <>
 <div className={`container-login ${pageslide ? 'active' : ''}`}>
        <div className="form-box login">
            <form action="#">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className="forgot-link">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <p>or login with social platforms</p>
                <div className="social-icons">
                    <a href="#"><i className='bx bxl-google' ></i></a>
                    <a href="#"><i className='bx bxl-facebook' ></i></a>
                    <a href="#"><i className='bx bxl-github' ></i></a>
                    <a href="#"><i className='bx bxl-linkedin' ></i></a>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="" autoComplete='off' onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required  value={register.username}  name='username' onChange={handleChange} />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required value={register.email} name='email' onChange={handleChange} />
                    <i className='bx bxs-envelope' ></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required  value={register.password} name='password' onChange={handleChange} />
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <button type="submit" className="btn" >Register</button>
                <p>or register with social platforms</p>
                <div className="social-icons">
                    <a href="#"><i className='bx bxl-google' ></i></a>
                    <a href="#"><i className='bx bxl-facebook' ></i></a>
                    <a href="#"><i className='bx bxl-github' ></i></a>
                    <a href="#"><i className='bx bxl-linkedin' ></i></a>
                </div>
            </form>
        </div>

        <div className="toggle-box">
            <div className="toggle-panel toggle-left">
                <h1>Hello, Welcome!</h1>
                <p>Don't have an account?</p>
                <button className="btn register-btn" onClick={(e) => {setpageslide(true)}} >Register</button>
            </div>

            <div className="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Already have an account?</p>
                <button className="btn login-btn" onClick={(e) =>{ setpageslide(false

                )}}>Login</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Login
