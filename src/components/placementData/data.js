import React, { useState,useEffect } from "react";
import "./data.css"

function Report() {

  const [data,setData]=useState([])
  const [selectedStudent, setSelectedStudent] = useState(null);
  useEffect(()=>{
        const details=localStorage.getItem('formData');
        if (details) {
            setData(JSON.parse(details));
          }
  },[])

  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };
  return (
    <div className="reportContainer p-2">
      <table class="table table-hover table-striped-columns">
        <thead>
          <tr className="table-primary">
            <th scope="col">Sl.No</th>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Package (LPA)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index} onClick={() => handleRowClick(student)}>
              <td>{index + 1}</td>
              <td>{student.rollno}</td>
              <td>{student.firstname} {student.lastname}</td>
              <td>{student.package}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
        <div className="modalBackdrop">
          <div className="modalContent">
            <div className="close" onClick={handleCloseDetails}>&times;</div>
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h2>Student Details</h2>
              <p><strong>Name:</strong> {selectedStudent.firstname} {selectedStudent.lastname}</p>
              <p><strong>Roll No:</strong> {selectedStudent.rollno}</p>
              <p><strong>Branch:</strong> {selectedStudent.branch.toUpperCase()}</p>
              <p><strong>Contact No1:</strong> {selectedStudent.mobilenumber1}</p>
              <p><strong>Contact No2:</strong> {selectedStudent.mobilenumber2}</p>
              <p><strong>E-Mail(Personal):</strong> {selectedStudent.personalEmail}</p>
              <p><strong>E-Mail(College):</strong> {selectedStudent.collegeEmail}</p>
              <p><strong>CGPA:</strong> {selectedStudent.cgpa}</p>
              <p><strong>Company:</strong> {selectedStudent.companyPlaced}</p>
              <p><strong>Package (LPA):</strong> {selectedStudent.package}</p>
              <p><strong>Year Joined:</strong> {selectedStudent.yearJoined}</p>
              <p><strong>Year Placed:</strong> {selectedStudent.yearPlaced}</p>
              <p><strong>On/Off Campus:</strong> {selectedStudent.campus}</p>
              <p><strong>Status:</strong> {selectedStudent.status}</p>
              <p><strong>Company Type:</strong> {selectedStudent.companyType}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Report;
