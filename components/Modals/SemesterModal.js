import React from "react";

export function SemesterModal({ isOpen, onClose, navigateTo }) {
  const triggerSem = (sem) => {
    onClose();
    navigateTo("#semesters/" + sem);
  };

  const triggerUpload = () => {
    onClose()
    navigateTo("#upload")
  }

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <div className="modal-container">
        <button className="modal-close-btn" id="close-semesters-x" onClick={onClose}>
          ✕
        </button>
        <div className="semester-card">
          <h2>Select B.Tech Semester</h2>
          <div className="semesters-grid">
            {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((sem, idx) => (
              <button 
                key={sem} 
                className="sem-card-btn" 
                data-semester={sem}
                onClick={() => triggerSem(sem)}
              >
                S{idx + 1} Notes
              </button>
            ))}
          </div>
          <div className="modal-extra-actions">
            <button className="outline-link-btn" id="modal-upload-action" onClick={triggerUpload}>
              ✍️ Contribute study materials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SemesterModal;
