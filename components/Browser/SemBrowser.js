import React from "react";
import academicDb from "../../data/db";

export function SemBrowser({ currentHash, navigateTo, routeSem, routeBranch, routeSubject }) {
  const semesterNum = routeSem.replace("s", "");
  const subjectsList = academicDb.subjects[routeSem]?.[routeBranch] || [];

  return (
    <>
      {!routeBranch && (
        <div id="branch-selection-container" className="branches-grid">
          <div className="branch-btn" data-branch="cse" onClick={() => navigateTo(`#semesters/${routeSem}/cse`)}>
            <span className="branch-icon">💻</span>
            <h3>Computer Science and Eng.</h3>
            <p>Curriculum notes on logic design, discrete maths, data structures and programming languages.</p>
          </div>
          <div className="branch-btn" data-branch="ece" onClick={() => navigateTo(`#semesters/${routeSem}/ece`)}>
            <span className="branch-icon">📟</span>
            <h3>Electronics and Comm.</h3>
            <p>Explore analog circuits, network theory, logic circuit designs and signal controllers.</p>
          </div>
          <div className="branch-btn" data-branch="eee" onClick={() => navigateTo(`#semesters/${routeSem}/eee`)}>
            <span className="branch-icon">⚡</span>
            <h3>Electrical and Electronics</h3>
            <p>Materials covering power grids, transformers, signal processing and network grids.</p>
          </div>
          <div className="branch-btn" data-branch="me" onClick={() => navigateTo(`#semesters/${routeSem}/me`)}>
            <span className="branch-icon">⚙️</span>
            <h3>Mechanical Engineering</h3>
            <p>Thermodynamics, mechanics of solids, fluid dynamics and engineering manufacturing notes.</p>
          </div>
          <div className="branch-btn" data-branch="ce" onClick={() => navigateTo(`#semesters/${routeSem}/ce`)}>
            <span className="branch-icon">🏗️</span>
            <h3>Civil Engineering</h3>
            <p>Surveying, fluid hydraulics, concrete structures, structural analysis and geology logs.</p>
          </div>
          <div className="branch-btn" data-branch="it" onClick={() => navigateTo(`#semesters/${routeSem}/it`)}>
            <span className="branch-icon">🌐</span>
            <h3>Information Technology</h3>
            <p>DBMS, networking layouts, software engineering guidelines and operating systems packs.</p>
          </div>
        </div>
      )}

      {routeBranch && !routeSubject && (
        <div id="subjects-container">
          <div className="back-navigation">
            <button className="back-to-branches-btn" onClick={() => navigateTo(`#semesters/${routeSem}`)}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
              <span>Back to Branches</span>
            </button>
          </div>

          <div className="subjects-list-grid">
            {subjectsList.length === 0 ? (
              <div className="empty-state" style={{ padding: "40px", textAlign: "center", gridColumn: "span 2" }}>
                <p style={{ color: "var(--text-muted)" }}>No study courses populated for this scheme branch yet.</p>
              </div>
            ) : (
              subjectsList.map((sub, index) => (
                <div 
                  key={index} 
                  className="subject-item-card"
                  onClick={() => navigateTo(`#semesters/${routeSem}/${routeBranch}/${encodeURIComponent(sub.code)}`)}
                >
                  <div className="subject-details">
                    <span className="code">{sub.code}</span>
                    <span className="credits">Credits: {sub.credits}</span>
                    <h3>{sub.name}</h3>
                  </div>
                  <svg className="chevron-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                  </svg>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default SemBrowser;
