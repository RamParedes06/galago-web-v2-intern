import React, { useState } from "react";
import "../styles/helpcenter.scss";
import NavigationBar from "../components/ui/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpCenterInfo from "./HelpCenterInfo";

const HelpCenter = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const paragraphs = document.querySelectorAll(".text");

  const changeFAQS = (option: any) => {
    setSelectedOption(option);
  };

  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener("click", function (e: any) {
      paragraphs.forEach((p) => {
        p.classList.remove("active");
      });
      // this.classList.add("active");
      e.currentTarget.classList.add("active");
    });
  });

  return (
    <>
      <NavigationBar />
      <main>
        <div className="helpcenter-page">
          <div className="title-container">
            <h1>Frequently Asked Questions</h1>
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
          </div>
          <div className="page">
            {newFunction(changeFAQS)}
            <HelpCenterInfo selectedOption={selectedOption} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HelpCenter;

function newFunction(changeFAQS: (option: any) => void) {
  return (
    <div className="sidebar">
      <div className="sidebar-text">
        <p className="text" onClick={() => changeFAQS("Option 1")}>
          About GalaGo!
        </p>
        <p className="text" onClick={() => changeFAQS("Option 2")}>
          Get in Touch
        </p>
        <p className="text" onClick={() => changeFAQS("Option 3")}>
          Plan and Book
        </p>
        <p className="text" onClick={() => changeFAQS("Option 4")}>
          Hotels and Flights
        </p>
        <p className="text" onClick={() => changeFAQS("Option 5")}>
          Payment & Pricing
        </p>
        <p className="text" onClick={() => changeFAQS("Option 6")}>
          Data & Privacy
        </p>
        <p className="text" onClick={() => changeFAQS("Option 7")}>
          Travel Insurance
        </p>
        <p className="text" onClick={() => changeFAQS("Option 8")}>
          Special Request
        </p>
      </div>
    </div>
  );
}
