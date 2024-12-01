import React from "react";

import Herobanner from "../Herobanner";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.png";
import image8 from "../../assets/images/8.png";
import { Link } from "react-router-dom";
import Skill from "../Skill";
import Experience from "../Experience";

function Home() {
  const projectImages = [
    {
      id: 1,
      imgage: image1,
    },

    {
      id: 4,
      imgage: image4,
    },
    {
      id: 5,
      imgage: image5,
    },
    {
      id: 6,
      imgage: image6,
    },
    {
      id: 7,
      imgage: image7,
    },
    {
      id: 8,
      imgage: image8,
    },
  ];
  
  return (
    <>
      <Herobanner />
      <section className="container-fluid">
        <div className="ab-wrapper">
          <h3>About</h3>
          <div className="about-content">
            <p>
              <hr />
            </p>
            <p>
              As a passionate and dedicated Shopify Developer at EastEssence, I
              leverage my expertise to create dynamic, user-friendly e-commerce
              experiences. Currently pursuing a Master of Computer Applications
              (MCA) from IGNOU through distance learning, I complement my
              academic pursuits with hands-on professional work. Prior to
              joining EastEssence, I spent nearly 2.8 years as a Frontend
              Developer at Makkpress Technologies, including a 6-month
              internship. This experience has helped me build a strong
              foundation in frontend development, specializing in theme
              development and customizations for platforms like Shopify and
              BigCommerce.
              <br /> <br />I have a deep understanding of integrating seamless
              solutions that enhance the functionality and aesthetics of online
              stores, delivering tailored, scalable results. My commitment to
              continuous learning and adapting to new technologies keeps me at
              the forefront of the rapidly changing web development landscape. I
              aim to contribute to impactful projects that elevate user
              experiences and drive business growth through innovative
              solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid project">
        <h3>Projects I've Contributed To</h3>
        <p>
          Here are some projects where I contributed significantly, focusing on
          theme development, <br /> customizations, and seamless integrations in
          Shopify, BigCommerce, WordPress, and Bigcommerce.
        </p>

        <div className="projects-grid">
          <div className="project-item">
            <div className="project-image">
              {projectImages.map((item) => (
                <div className="p-imag-item" key={item.id}>
                  <img src={item.imgage} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <Link to={"/projects"} className="cus-btn secondry-btn">
            View Projects
          </Link>
        </div>
      </section>
      <Skill />
      < Experience />
    </>
  );
}

export default Home;
