import React from 'react';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";

function MedainPlacements() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={image1} alt="Image 1" className="img-fluid" />
          <div className="mt-2">
            <p>Average Salary Offered By Department</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <img src={image2} alt="Image 2" className="img-fluid" />
          <div className="mt-2">
            <p>Conversion of Internship to placements</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={image3} alt="Image 3" className="img-fluid" />
          <div className="mt-2">
            <p>Medain Package based on Salary</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <img src={image4} alt="Image 4" className="img-fluid" />
          <div className="mt-2">
            <p>Distribution of packages</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={image5} alt="Image 5" className="img-fluid" />
          <div className="mt-2">
            <p>Trend of Average Salary Offered Over Years</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <img src={image6} alt="Image 6" className="img-fluid" />
          <div className="mt-2">
            <p>Average Salary Offered by Year of Admission</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedainPlacements;
