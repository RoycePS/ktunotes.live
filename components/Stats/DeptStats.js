import React from "react";

export function DeptStats({ navigateTo }) {
  return (
    <div className="departments-overview-grid">
      <div className="dept-stats-card">
        <h3>Computer Science (CSE)</h3>
        <div className="dept-stats-details">
          <p>Total Mapped Subjects: <strong>48 courses</strong></p>
          <p>Volunteers and Contributors: <strong>1,240 students</strong></p>
          <p>Notes Files Stored: <strong>320 Documents</strong></p>
        </div>
        <button className="dept-card-action" onClick={() => navigateTo("#semesters/s3/cse")}>
          Browse CSE Notes
        </button>
      </div>

      <div className="dept-stats-card">
        <h3>Electronics and Communication (ECE)</h3>
        <div className="dept-stats-details">
          <p>Total Mapped Subjects: <strong>44 courses</strong></p>
          <p>Volunteers and Contributors: <strong>940 students</strong></p>
          <p>Notes Files Stored: <strong>240 Documents</strong></p>
        </div>
        <button className="dept-card-action" onClick={() => navigateTo("#semesters/s3/ece")}>
          Browse ECE Notes
        </button>
      </div>
    </div>
  );
}
export default DeptStats;
