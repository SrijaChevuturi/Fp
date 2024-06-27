import React from 'react';
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import './Companies.css'; // Import the CSS file

function Companies() {
  return (
    <div className="companies-container">
      <img src={img1} alt="Image 1" className="company-image" />
      <img src={img2} alt="Image 2" className="company-image" />
    </div>
  );
}

export default Companies;
