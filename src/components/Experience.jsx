import React from "react";

function Experience() {
  return (
    <>
      <section className="CV-page container-fluid">
        <div className="CV-grid">
          <div className="CV-grid-column">
            <div className="CV-jobs">
              <h3 className="CV-secondaryHeading CV-jobs-heading">
                Relevant Experience
              </h3>
              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">
                    Frontend Developer{" "}
                  </span>
                  &#8211;{" "}
                  <span className="CV-timeline-heading-location">
                    MakkPress Technologies ,New Delhi{" "}
                  </span>
                  <small className="CV-timeline-heading-duration">
                    {" "}
                    November,2021 - June,2024
                  </small>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-job-timeline-item">
                    Designed and built user-friendly websites using HTML5, CSS3,
                    and JavaScript.
                  </li>
                  <li className="CV-job-timeline-item">
                    Created dynamic website elements using JavaScript for
                    enhanced user interaction.
                  </li>
                  <li className="CV-job-timeline-item">
                    Integrated frontend designs seamlessly with backend systems,
                    including platforms like BigCommerce, Shopify, and WordPress
                  </li>
                  <li className="CV-job-timeline-item">
                    Customized and optimized Shopify themes for improved
                    aesthetics and functionality.
                  </li>
                  <li className="CV-job-timeline-item">
                    Utilized Liquid templating language for advanced
                    customization on Shopify.
                  </li>
                  <li className="CV-job-timeline-item">
                    Specialized in customizing BigCommerce themes to enhance
                    online stores.
                  </li>
                  <li className="CV-job-timeline-item">
                    Proficient in WordPress development, including plugin
                    integration and customization.
                  </li>
                  <li className="CV-job-timeline-item">
                    Designed visually appealing web pages using Elementor page
                    builder for WordPress.
                  </li>
                </ul>
              </section>

              <section className="CV-timeline CV-job">
                <h3 className="CV-timeline-heading">
                  <span className="CV-timeline-heading-title">
                    Web Developer{" "}
                  </span>
                  &#8211;{" "}
                  <span className="CV-timeline-heading-location">
                    Eastessence.com, New Delhi
                  </span>
                  <small className="CV-timeline-heading-duration">
                    July 2024 - Present
                  </small>
                </h3>
                <ul className="CV-timeline-details">
                  <li className="CV-timeline-details-item">
                    Led the development and customization of Shopify stores with
                    a focus on enhancing the customer shopping experience, from
                    product discovery to checkout and returns.
                  </li>
                  <li className="CV-timeline-details-item">
                    Utilized the Shopify REST API to build and integrate custom
                    apps that catered to business-specific needs, including
                    inventory management, personalized customer experiences, and
                    loyalty programs.
                  </li>
                  <li className="CV-timeline-details-item">
                    Integrated easy-to-use return management systems to improve
                    customer satisfaction, reducing friction in the
                    post-purchase experience.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
