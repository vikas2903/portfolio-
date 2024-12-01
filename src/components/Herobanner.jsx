import React from "react";
import { Link } from "react-router-dom";

function Herobanner() {
  return (
    <>
      <section className="hero-banner-container container-fluid">
        <div className="hero-banner-wrapper">
          <div className="hb-l">
            <h1 className="hero-title">
              Web Developer with Expertise in Modern Web Technologies
            </h1>
            <p className="hero-subtitle">
              I’m a Web developer with expertise in Shopify, BigCommerce,
              WordPress, and React.js. I create visually stunning,
              high-performance websites that bring ideas to life and deliver
              seamless user experiences.
            </p>
           
            <Link to={'/projects'} className="cus-btn">View  Projects</Link>
          </div>
          <div className="hb-r">
           <div className="info-wrapper glowing-border">
            <div className="info-item info-item-1"><p>{`const information = {`}</p></div>
            <div className="info-item info-item-2"><p>name : <span>'Vikas Prasad',</span></p></div>
            <div className="info-item info-item-3"><p>role : <span>'Web Developer',</span></p></div>
            <div className="info-item info-item-4"><p>location : <span>'New Delhi, India',</span></p></div>
            <div className="info-item info-item-5"><p>skills : <span>['Shopify, BigCommerce, WordPress, Reactjs'],</span></p></div>
            <div className="info-item info-item-6"><p>experienceYears  : <span>'2.8 year',</span></p></div>
            <div className="info-item info-item-7"><p>{`}`}</p></div>
            <div className="info-item info-item-8"><p>export default <span>information;</span></p></div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herobanner;
