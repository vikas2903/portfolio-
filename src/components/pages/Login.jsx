import React, { useState, useEffect } from "react";
import "../../assets/css/login.css";
import { app } from "../../firebase";
import {getFirestore, setDoc, doc} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

function Login() {

    const firestoreCloud = getFirestore(app);

  const [pageslide, setpageslide] = useState(false);
  const [register, setregister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setregister({ ...register, [name]: value });
  }

//   const registerUser = async () => {
//     const auth = getAuth();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         register.email,
//         register.password
//       );
//       const user = userCredential.user;
//       console.log(user);
//       console.log(userCredential);
//       if(user){
//         await setDoc(doc(firestoreCloud, "customers/user", user.uid), {
//             email: user.email,
//             password: register.password,
//             firstname: register.firstname,
//             lastname: register.lastname,
//             mobilenumber: register.mobilenumber,
//         });
        
//       }
//       toast.success("User Registered Successfully!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Registration Failed. Please try again.", {
//         position: "top-right",
//       });
//     }
//   };



  

const registerUser = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        register.email,
        register.password
      );
      const user = userCredential.user;
      console.log(user);
      console.log(userCredential);
      if (user) {
        await setDoc(doc(firestoreCloud, "Users", user.uid), {
          email: user.email,
          password: register.password,
          firstname: register.firstname,
          lastname: register.lastname,
          mobilenumber: register.mobilenumber,
        });
      }
      toast.success("User Registered Successfully!", { 
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error(`Registration Failed. Error: ${error.message}`, {
        position: "top-right",
      });
    }
  };
  
  function  loginChange (e) {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  }
  const loginUser = async () =>{
    try{
      const auth = getAuth();
      const userlogedDetails = await signInWithEmailAndPassword(
        auth,
        login.email,
        login.password
      );
      console.log(userlogedDetails);
      
  
      toast.success("Login Successfully!", {
        position: "top-right",
      });
      window.location.href = "/services";
  
    }catch(error){
      console.log(error);
      toast.error("Login Failed. Please try again.", {
        position: "top-right",
      });
    }
  }

  function handleloginSubmit (e){
    e.preventDefault();
    loginUser();
    setlogin({
      email: "",
      password: "",
    });
  }
function handleSubmit(e) {
    // if (
    //   !register.firstname ||
    //   !register.lastname ||
    //   !register.mobilenumber ||
    //   !register.email ||
    //   !register.password
    // ) {
    //   toast.error("All fields are required!");
    //   return;
    // }

    // const mobileRegex = /^[0-9]{10}$/;
    // if (!mobileRegex.test(register.mobilenumber)) {
    //   toast.error("Invalid mobile number. Please enter a 10-digit number.");
    //   return;
    // }

    e.preventDefault();
    registerUser();
    setregister({
      firstname: "",
      lastname: "",
      mobilenumber: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <div className={`container-login ${pageslide ? "active" : ""}`}>
        <div className="form-box login">
          <form action="" onSubmit={handleloginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required  value={login.email} name="email" onChange={loginChange}/>
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required value={login.password} name="password" onChange={loginChange}/>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form action="" autoComplete="off" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                required
                value={register.firstname}
                name="firstname"
                onChange={handleChange}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                required
                value={register.lastname}
                name="lastname"
                onChange={handleChange}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Mobile Number"
                required
                value={register.mobilenumber}
                name="mobilenumber"
                onChange={handleChange}
              />
              <i className="bx bxs-phone-call"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={register.email}
                name="email"
                onChange={handleChange}
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={register.password}
                name="password"
                onChange={handleChange}
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button
              className="btn register-btn"
              onClick={(e) => {
                setpageslide(true);
              }}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              className="btn login-btn"
              onClick={(e) => {
                setpageslide(false);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
