import React, { useState } from "react";
import academicDb from "../../data/db";

export function SgpaCalc() {
  const [gpaBranch, setGpaBranch] = useState("cse");
  const [gpaSemester, setGpaSemester] = useState("s1");
  const [gpaSubjectsList, setGpaSubjectsList] = useState([]);
  const [isGpaLoaded, setIsGpaLoaded] = useState(false);
  const [calculatedSgpa, setCalculatedSgpa] = useState(null);
  const [gpaCreditsEarned, setGpaCreditsEarned] = useState(0);
  const [gpaCreditsTotal, setGpaCreditsTotal] = useState(0);
  const [gpaVerdict, setGpaVerdict] = useState("");
  const [gpaClass, setGpaClass] = useState("");

  const handleLoadGpaCourses = () => {
    const list = academicDb.subjects[gpaSemester]?.[gpaBranch] || [];
    if (list.length === 0) {
      alert("Subject database for this selection is under maintenance. Try Semester 1 or Semester 3 CSE!");
      return;
    }
    setGpaSubjectsList(list.map(sub => ({ ...sub, selectedGrade: "10" })));
    setIsGpaLoaded(true);
    setCalculatedSgpa(null);
  };

  const handleGradeChange = (index, val) => {
    setGpaSubjectsList(prev => {
      const clone = [...prev];
      clone[index].selectedGrade = val;
      return clone;
    });
  };

  const handleCalculateSgpa = () => {
    let totalGradePoints = 0;
    let totalCreditsEarned = 0;
    let totalCreditsRegistered = 0;

    gpaSubjectsList.forEach(item => {
      const credits = parseFloat(item.credits);
      const gradeVal = parseFloat(item.selectedGrade);

      totalCreditsRegistered += credits;
      totalGradePoints += (gradeVal * credits);

      if (gradeVal > 0) {
        totalCreditsEarned += credits;
      }
    });

    if (totalCreditsRegistered === 0) return;

    const sgpa = totalGradePoints / totalCreditsRegistered;
    setCalculatedSgpa(sgpa);
    setGpaCreditsEarned(totalCreditsEarned);
    setGpaCreditsTotal(totalCreditsRegistered);

    if (sgpa >= 9.0) {
      setGpaVerdict("Brilliant Academic Standing! 🎉");
      setGpaClass("First Class with Distinction");
    } else if (sgpa >= 7.5) {
      setGpaVerdict("Excellent Performance! 👍");
      setGpaClass("First Class");
    } else if (sgpa >= 5.0) {
      setGpaVerdict("Good Progress! Keep Going.");
      setGpaClass("Second Class");
    } else {
      setGpaVerdict("Semester Backlog / Failures.");
      setGpaClass("Failed Papers");
    }
  };

  const handleResetGpa = () => {
    setGpaSubjectsList(prev => prev.map(item => ({ ...item, selectedGrade: "10" })));
    setCalculatedSgpa(null);
  };

  const handleShareGpaWhatsApp = () => {
    const msg = `Hey, I just calculated my KTU Semester Grade Point Average on KTUNOTES.LIVE and scored an SGPA of ${calculatedSgpa.toFixed(2)}! Check your SGPA here: https://ktunotes.live`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="gpa-calculator-container">
      <div className="gpa-setup-card">
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="gpa-scheme">Select Scheme</label>
            <select id="gpa-scheme">
              <option value="2024">2024 Scheme</option>
              <option value="2019">2019 Scheme</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gpa-branch">Select Branch</label>
            <select id="gpa-branch" value={gpaBranch} onChange={(e) => setGpaBranch(e.target.value)}>
              <option value="cse">Computer Science (CSE)</option>
              <option value="ece">Electronics (ECE)</option>
              <option value="eee">Electrical (EEE)</option>
              <option value="me">Mechanical (ME)</option>
              <option value="ce">Civil (CE)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gpa-semester">Select Semester</label>
            <select id="gpa-semester" value={gpaSemester} onChange={(e) => setGpaSemester(e.target.value)}>
              <option value="s1">Semester 1</option>
              <option value="s2">Semester 2</option>
              <option value="s3">Semester 3</option>
              <option value="s4">Semester 4</option>
              <option value="s5">Semester 5</option>
              <option value="s6">Semester 6</option>
              <option value="s7">Semester 7</option>
              <option value="s8">Semester 8</option>
            </select>
          </div>
        </div>
        <button className="primary-btn wide-btn" onClick={handleLoadGpaCourses}>
          Load Subjects and Credits
        </button>
      </div>

      {isGpaLoaded && (
        <div className="gpa-courses-card">
          <h3>Enter Grade Results</h3>
          <p className="desc">Input your grades in each corresponding subject</p>
          <table className="gpa-table">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th style={{ textAlign: "center" }}>Credits</th>
                <th style={{ textAlign: "center" }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {gpaSubjectsList.map((sub, index) => (
                <tr key={index}>
                  <td>
                    <strong style={{ color: "var(--primary)", fontSize: "0.85rem" }}>{sub.code}</strong>
                    <br />
                    <span>{sub.name}</span>
                  </td>
                  <td style={{ textAlign: "center", fontWeight: "700" }}>{sub.credits}</td>
                  <td style={{ textAlign: "center" }}>
                    <select 
                      value={sub.selectedGrade} 
                      className="grade-select"
                      onChange={(e) => handleGradeChange(index, e.target.value)}
                    >
                      <option value="10">S (Outstanding)</option>
                      <option value="9">A (Excellent)</option>
                      <option value="8">B (Very Good)</option>
                      <option value="7">C (Good)</option>
                      <option value="6">D (Satisfactory)</option>
                      <option value="5">P (Pass)</option>
                      <option value="0">F (Failed / Absent)</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="gpa-actions">
            <button className="primary-btn" style={{ flex: 1 }} onClick={handleCalculateSgpa}>
              Calculate SGPA
            </button>
            <button className="outline-btn" style={{ flex: 1 }} onClick={handleResetGpa}>
              Reset Grades
            </button>
          </div>
        </div>
      )}

      {calculatedSgpa !== null && (
        <div className="gpa-result-card">
          <div className="result-glow-effect"></div>
          <div className="result-circle">
            <span className="result-number">{calculatedSgpa.toFixed(2)}</span>
            <span className="result-label">SGPA</span>
          </div>
          <div className="result-details">
            <h2>{gpaVerdict}</h2>
            <p>Credits Registered: <strong>{gpaCreditsTotal}</strong> | Credits Cleared: <strong>{gpaCreditsEarned}</strong></p>
            <p style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: "600" }}>{gpaClass}</p>
            <div className="result-shares">
              <button className="social-share-btn" onClick={handleShareGpaWhatsApp}>
                Share Result on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SgpaCalc;
