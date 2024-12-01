import React from "react";
import html from "../assets/images/Html.svg";
import css from "../assets/images/css.svg";
import js from "../assets/images/js.svg";
import shopify from "../assets/images/shopify.png";
import bigcommerce from "../assets/images/bigcomerce.png";
import wordpress from "../assets/images/wordpress.jpg";
import nodejs from "../assets/images/nodejs.svg";
import reactjs from "../assets/images/reactjs.svg";
import mongodb from "../assets/images/mongodb.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skill() {
  const skillImage = [
    { id: 1, image: html, name: "HTML" },
    { id: 2, image: css, name: "CSS" },
    { id: 3, image: js, name: "JavaScript" },
    { id: 4, image: shopify, name: "Shopify" },
    { id: 5, image: bigcommerce, name: "BigCommerce" },
    { id: 6, image: wordpress, name: "WordPress" },
    { id: 7, image: nodejs, name: "NodeJS" },
    { id: 8, image: reactjs, name: "ReactJS" },
    { id: 9, image: mongodb, name: "MongoDB" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="skills-wrapper container-fluid">
      <h3>My Skill Set</h3>
      <div className="d-flex skills-slider">
      <p><hr /></p>
      <p>
        I bring a wealth of expertise in e-commerce development and modern web
        technologies. With in-depth knowledge of Shopify and BigCommerce, I
        specialize in creating seamless, high-performing online stores tailored
        to your business needs. My proficiency extends to the MERN stack
        (MongoDB, Express.js, React.js, Node.js), enabling me to develop
        dynamic, scalable, and efficient web applications. Whether it's crafting
        custom themes, integrating advanced functionalities, or building
        full-stack solutions, I deliver innovative results that enhance user
        experience and drive success.
      </p>
      </div>
      <div className="skill-sets">
        <Slider {...settings}>
          {skillImage.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <img
                src={skill.image}
                alt={`Skill ${skill.id}`}
                title={skill.name}
                aria-label={skill.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Skill;
