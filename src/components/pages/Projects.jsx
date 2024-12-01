import React from "react";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.png";
import image8 from "../../assets/images/8.png";
import image9 from "../../assets/images/9.png";
import image10 from "../../assets/images/10.png";
import image11 from "../../assets/images/11.png";

function Projects() {
  const projectImagess = [
    {
      id: 1,
      imgage: image1,
    },
    {
      id: 9,
      imgage: image9,
    },
    {
      id: 7,
      imgage: image7,
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
      id: 8,
      imgage: image8,
    },

    {
      id: 10,
      imgage: image10,
    },
    {
      id: 11,
      imgage: image11,
    },
    {
      id: 2,
      imgage: image2,
    },
    {
      id: 3,
      imgage: image3,
    },
  ];
  return (
    <div className="container-fluid">
      <h1 className="pageTitle">Projects</h1>
      <div className="projects-grid pt-5">
        <div className="project-item">
          <div className="project-image">
            {projectImagess.map((item) => (
              <div className="p-imag-item" key={item.id}>
                <img src={item.imgage} alt="" loading="lazy" />
              </div>
            ))}
            {/* <div class="p-imag-item"><p class="page-bottom-title">[...Projects] = Working </p></div> */}
          </div>
        </div>

        <p className="page-bottom-title">[...Projects] = Working </p>

      </div>
    </div>
  );
}

export default Projects;
