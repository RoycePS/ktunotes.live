import React from "react";
import academicDb, { getSubjectMaterials } from "../../data/db";

export function SubjectDashboard({ routeSem, routeBranch, routeSubject, activeMaterialTab, setActiveMaterialTab, navigateTo }) {
  const subjectsList = academicDb.subjects[routeSem]?.[routeBranch] || [];
  const matchedSubject = subjectsList.find(sub => sub.code === routeSubject) || { code: routeSubject, name: routeSubject, credits: 4 };
  const matchedSubjectMaterials = getSubjectMaterials(matchedSubject.code, matchedSubject.name);

  return (
    <div id="materials-container">
      <div className="back-navigation">
        <button className="back-to-subjects-btn" onClick={() => navigateTo(`#semesters/${routeSem}/${routeBranch}`)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          <span>Back to Subjects</span>
        </button>
      </div>

      <div className="subject-header-card">
        <span className="subject-code-badge">{matchedSubject.code}</span>
        <div className="subject-header-details">
          <h2>{matchedSubject.name}</h2>
          <p>Credits: {matchedSubject.credits} | 2024 Scheme Study Modules</p>
        </div>
      </div>

      <div className="materials-tabs">
        <button 
          className={`tab-btn ${activeMaterialTab === "tab-notes" ? "active" : ""}`}
          onClick={() => setActiveMaterialTab("tab-notes")}
        >
          📖 Study Notes
        </button>
        <button 
          className={`tab-btn ${activeMaterialTab === "tab-syllabus" ? "active" : ""}`}
          onClick={() => setActiveMaterialTab("tab-syllabus")}
        >
          📋 Syllabus
        </button>
        <button 
          className={`tab-btn ${activeMaterialTab === "tab-models" ? "active" : ""}`}
          onClick={() => setActiveMaterialTab("tab-models")}
        >
          📝 Model Papers
        </button>
        <button 
          className={`tab-btn ${activeMaterialTab === "tab-pyq" ? "active" : ""}`}
          onClick={() => setActiveMaterialTab("tab-pyq")}
        >
          ⚡ PYQs
        </button>
      </div>

      <div className={`tab-panel ${activeMaterialTab === "tab-notes" ? "active" : ""}`}>
        <div className="notes-modules-list">
          {matchedSubjectMaterials.notes.map((note, index) => (
            <div key={index} className="module-item">
              <div className="module-info">
                <h4>{note.title}</h4>
                <p>Contribution by: <strong>{note.author}</strong></p>
              </div>
              <div className="notes-download-links">
                <button className="download-link-btn" onClick={() => alert(`Downloading ${note.file} ...`)}>
                  Download Notes
                </button>
                <button className="download-link-btn secondary-dl" onClick={() => alert(`Opening PDF preview for ${note.file} ...`)}>
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`tab-panel ${activeMaterialTab === "tab-syllabus" ? "active" : ""}`}>
        <div className="syllabus-card-content">
          <h3>Subject Syllabus Blueprint</h3>
          <div 
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: matchedSubjectMaterials.syllabus }}
          ></div>
        </div>
      </div>

      <div className={`tab-panel ${activeMaterialTab === "tab-models" ? "active" : ""}`}>
        <div className="notes-modules-list">
          {matchedSubjectMaterials.models.map((model, index) => (
            <div key={index} className="qp-item">
              <div className="qp-info">
                <h4>{model.title}</h4>
                <p>KTU Board Model Solved Answer Sheet</p>
              </div>
              <button className="download-link-btn" onClick={() => alert(`Downloading ${model.file} ...`)}>
                Download Model
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={`tab-panel ${activeMaterialTab === "tab-pyq" ? "active" : ""}`}>
        <div className="notes-modules-list">
          {matchedSubjectMaterials.pyqs.map((qp, index) => (
            <div key={index} className="qp-item">
              <div className="qp-info">
                <h4>{qp.title}</h4>
                <p>Year: {qp.year} | University Semester Exam Question Paper</p>
              </div>
              <button className="download-link-btn" onClick={() => alert(`Downloading ${qp.file} ...`)}>
                Download Paper
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SubjectDashboard;
