import React, { useState } from "react";
import styled from "styled-components";
import { app } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const db = getDatabase(app);
  const storeInfirebase = (cq_name, cq_email, cq_phone, query) => {
    set(ref(db, "customer/queries/" + Date.now()), {
      cq_name: cq_name,
      cq_email: cq_email,
      cq_phone: cq_phone,
      cq_query: query,
    });
  };

  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChanges = (e) => {
    const { name, value } = e.target;

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // storeInfirebase(formData.cq_name,formData.cq_email,formData.cq_phone,formData.query);
    storeInfirebase(
      formData.name,
      formData.email,
      formData.phone,
      formData.message
    );

    toast('Form Submitted Successfuly!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
    setformData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  return (
    <>
      <Wrapper>
        <div className="container">
          <span className="big-circle"></span>
          <img src="img/shape.png" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta! */}
              </p>

              <div className="info">
                <div className="information">
                  <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
                  <p>New Delhi, India</p>
                </div>
                <div className="information">
                  <i className="fas fa-envelope"></i> &nbsp;&nbsp;
                  <p>
                    <a href="mailto:prasadvvikas@gmail.com">
                      prasadvvikas@gmail.com
                    </a>
                  </p>
                </div>
                <div className="information">
                  <i className="fas fa-phone"></i>&nbsp;&nbsp;
                  <p>
                    <a href="tel:+91 7048 92 2570">+91 7048 92 2570</a>
                  </p>
                </div>
              </div>

              <div className="social-media">
                {/* <p>Connect with us:</p> */}
                <div className="social-icons">
                  {/* Add social media icons here */}
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form action="" autoComplete="off" onSubmit={handleSubmit}>
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    className="input"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChanges}
                  />
                  <label htmlFor="name">Name</label>
                  <span>Name</span>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    required
                    id="email"
                    value={formData.email}
                    onChange={handleInputChanges}
                  />
                  <label htmlFor="email">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input
                    type="tel"
                    name="phone"
                    className="input"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChanges}
                  />
                  <label htmlFor="phone">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea
                    name="message"
                    className="input"
                    required
                    id="message"
                    value={formData.message}
                    onChange={handleInputChanges}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
      <ToastContainer />
     
    </>
  );
}

const Wrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: var(--color-black-500);
    // overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .information a {
    color: #555555;
  }

  .form {
    width: 100%;
    max-width: 820px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    z-index: 2;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-form {
    background-color: #d29c19;
    position: relative;
  }

  .circle {
    border-radius: 50%;
    background: linear-gradient(135deg, transparent 20%, #5c4c24);
    position: absolute;
  }

  .circle.one {
    width: 130px;
    height: 130px;
    top: 130px;
    right: -40px;
  }

  .circle.two {
    width: 80px;
    height: 80px;
    top: 10px;
    right: 30px;
  }

  .contact-form:before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #d29c19;
    transform: rotate(45deg);
    top: 50px;
    left: -13px;
  }

  form {
    padding: 2.3rem 2.2rem;
    // z-index: 10;
    overflow: hidden;
    position: relative;
  }

  .title {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.7rem;
  }

  .input-container {
    position: relative;
    margin: 1rem 0;
  }

  .input {
    width: 100%;
    outline: none;
    border: 2px solid #fafafa;
    background: none;
    padding: 0.6rem 1.2rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    border-radius: 5px;
    transition: 0.3s;
  }

  textarea.input {
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    border-radius: 5px;
    resize: none;
    overflow-y: auto;
  }

  .input-container label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: #fafafa;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    // z-index: 1000;
    transition: 0.5s;
  }

  .input-container.textarea label {
    top: 1rem;
    transform: translateY(0);
  }

  .btn {
    padding: 0.6rem 1.3rem;
    background-color: #fff;
    border: 2px solid #fafafa;
    font-size: 0.95rem;
    color: #d29c19;
    line-height: 1;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    margin: 0;
    width: 100%;
  }

  .btn:hover {
    background-color: transparent;
    color: #fff;
  }

  .input-container span {
    position: absolute;
    top: 0;
    left: 25px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    padding: 0 0.4rem;
    color: transparent;
    pointer-events: none;
    // z-index: 500;
  }

  .input-container span:before,
  .input-container span:after {
    content: "";
    position: absolute;
    width: 10%;
    opacity: 0;
    transition: 0.3s;
    height: 5px;
    background-color: #d29c19;
    top: 50%;
    transform: translateY(-50%);
  }

  .input-container span:before {
    left: 50%;
  }

  .input-container span:after {
    right: 50%;
  }

  .input-container.focus label {
    top: 0;
    transform: translateY(-50%);
    left: 25px;
    z-index: 1000;
    font-size: 0.8rem;
  }

  .input-container.focus span:before,
  .input-container.focus span:after {
    width: 50%;
    opacity: 1;
  }

  .contact-info {
    padding: 2.3rem 2.2rem;
    position: relative;
  }

  .contact-info .title {
    color: #d29c19;
  }

  .text {
    color: #333;
    margin: 1.5rem 0 2rem 0;
  }

  .information {
    display: flex;
    color: #555;
    margin: 0.7rem 0;
    align-items: center;
    font-size: 0.95rem;
  }

  .information i {
    color: #d29c19;
  }

  .icon {
    width: 28px;
    margin-right: 0.7rem;
  }

  .social-media {
    padding: 2rem 0 0 0;
  }

  .social-media p {
    color: #333;
  }

  .social-icons {
    display: flex;
    margin-top: 0.5rem;
  }

  .social-icons a {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background: linear-gradient(45deg, #d29c19, #149279);
    color: #fff;
    text-align: center;
    line-height: 35px;
    margin-right: 0.5rem;
    transition: 0.3s;
  }

  .social-icons a:hover {
    transform: scale(1.05);
  }

  .contact-info:before {
    content: "";
    position: absolute;
    width: 110px;
    height: 100px;
    border: 22px solid #d29c19;
    border-radius: 50%;
    bottom: -77px;
    right: 50px;
    opacity: 0.3;
  }

  .big-circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #d29c19, #000000);
    bottom: 50%;
    right: 50%;
    transform: translate(-40%, 38%);
  }

  .big-circle:after {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    background-color: #fafafa;
    border-radius: 50%;
    top: calc(50% - 180px);
    left: calc(50% - 180px);
  }

  .square {
    position: absolute;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(181%, 11%);
    opacity: 0.2;
  }

  @media (max-width: 850px) {
    .form {
      grid-template-columns: 1fr;
    }
    .container {
      min-height: auto;
    }

    .contact-info:before {
      bottom: initial;
      top: -75px;
      right: 65px;
      transform: scale(0.95);
    }

    .contact-form:before {
      top: -13px;
      left: initial;
      right: 70px;
    }

    .square {
      transform: translate(140%, 43%);
      height: 350px;
    }

    .big-circle {
      bottom: 75%;
      transform: scale(0.9) translate(-40%, 30%);
      right: 50%;
    }

    .text {
      margin: 1rem 0 1.5rem 0;
    }

    .social-media {
      padding: 1.5rem 0 0 0;
    }
  }

  @media (max-width: 480px) {
    .form {
      z-index: 0;
    }
    .container {
      padding: 1.5rem;
    }

    .contact-info:before {
      display: none;
    }

    .square,
    .big-circle {
      display: none;
    }

    form,
    .contact-info {
      padding: 1.7rem 1.6rem;
    }

    .text,
    .information,
    .social-media p {
      font-size: 0.8rem;
    }

    .title {
      font-size: 1.15rem;
    }

    .social-icons a {
      width: 30px;
      height: 30px;
      line-height: 30px;
    }

    .icon {
      width: 23px;
    }

    .input {
      padding: 0.45rem 1.2rem;
    }

    .btn {
      padding: 0.45rem 1.2rem;
    }
  }
`;

export default Contact;
