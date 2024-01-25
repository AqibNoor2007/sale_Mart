import React from "react";
import { Button, WebHeader, Footer } from "../../Components/Atom";
import "./landing.css";
import TestiCard from "../../Components/Molicules/LandingPage/testiCard";
import { NavLink, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landingPage">
        <WebHeader />
        <div className="text-white hero-content">
          <p className="f-s-30 ">Learn About AliBaba.com</p>
          <h2 className="heading">
            The leading B2B ecommerce platform for global trade
          </h2>
          <div style={{ display: "flex", gap: "15px" }}>
            <NavLink to="/products" target="_blank" className="navLink">
              <Button
                content="Start For Free"
                onClick={() => console.log("test")}
                varient="primary"
              />
            </NavLink>
            <div className="sign-in">
              <Button
                content="Sign In"
                onClick={() => console.log("test")}
                varient="secondary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tour">
        <h1>Source direct-from-factory</h1>
        <div className="factory-tour">
          <div className="factory-common factory-1">
            <p className="factory-content">Take factory live tours</p>
            <p className="factory-content">View Live</p>
          </div>
          <div className="factory-common factory-2">
            <p className="factory-content">Get samples</p>
            <p className="factory-content">View More</p>
          </div>
          <div className="factory-common factory-3">
            <p className="factory-content">
              Connect with top-ranking manufacturers
            </p>
            <p className="factory-content">View More</p>
          </div>
        </div>
      </div>
      <div className="testinomial">
        <h1 className="testi-heading">
          Trade with confidence from production quality to purchase protection
        </h1>
        <div className="testi-card">
          <TestiCard className="tab-padding">
            <p className="test-headline text-white" style={{ marginTop: "0" }}>
              Ensure production quality with
            </p>
            <img src="/verified.png" className="img" />
            <p className="test-headline text-white">
              Connect with a variety of suppliers, including Custom
              Manufacturers, Brand Holders, and Multispecialty Suppliers, that
              have verified credentials and capabilities.
            </p>
            <div className="testi-btn">
              <Button
                icon={<img src={"/video.png"} height={25} />}
                content="Watch Video"
                onClick={() => console.log("test")}
                varient="icon-primary"
              />
              <Button
                content="Learn More"
                onClick={() => console.log("test")}
                varient="text"
              />
            </div>
          </TestiCard>
          <TestiCard className="tab-padding">
            <p className="test-headline text-white" style={{ marginTop: "0" }}>
              Protect your purchases with
            </p>
            <img src="/trade.avif" className="img" />
            <p className="test-headline text-white">
              Source confidently for your business knowing that orders made
              through Trade Assurance on Alibaba.com are protected, from payment
              to delivery and after-sales.
            </p>
            <div className="testi-btn">
              <Button
                icon={<img src={"/video.png"} height={25} />}
                content="Watch Video"
                onClick={() => console.log("test")}
                varient="icon-primary"
              />
              <Button
                content="Learn More"
                onClick={() => console.log("test")}
                varient="text"
              />
            </div>
          </TestiCard>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
