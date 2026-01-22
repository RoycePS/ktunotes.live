import React, { useState, useRef } from "react";

export function ContributeForm() {
  const [uploaderName, setUploaderName] = useState("");
  const [uploaderEmail, setUploaderEmail] = useState("");
  const [uploaderDesc, setUploaderDesc] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const triggerFileSelection = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveUploadedFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleUploaderSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setUploadSuccess(true);
      setIsUploading(false);
    }, 1500);
  };

  const resetUploaderForm = () => {
    setUploaderName("");
    setUploaderEmail("");
    setUploaderDesc("");
    setUploadedFile(null);
    setUploadSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="upload-form-container">
      <form id="material-upload-form" className="glass-form" onSubmit={handleUploaderSubmit}>
        <div className="form-row-two">
          <div className="form-group">
            <label htmlFor="upl-name">Your Full Name</label>
            <input 
              type="text" 
              id="upl-name" 
              required 
              placeholder="Enter name"
              value={uploaderName}
              onChange={(e) => setUploaderName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="upl-email">Email Address</label>
            <input 
              type="email" 
              id="upl-email" 
              required 
              placeholder="Enter email"
              value={uploaderEmail}
              onChange={(e) => setUploaderEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row-three">
          <div className="form-group">
            <label htmlFor="upl-sem">Semester</label>
            <select id="upl-sem">
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
              <option>Semester 5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="upl-branch">Branch</label>
            <select id="upl-branch">
              <option>Computer Science (CSE)</option>
              <option>Electronics (ECE)</option>
              <option>Mechanical (ME)</option>
              <option>Civil (CE)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="upl-type">Material Type</label>
            <select id="upl-type">
              <option>Handwritten Class Notes</option>
              <option>Solved Model Paper</option>
              <option>Syllabus Copy</option>
              <option>Past Year Exam Paper</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="upl-desc">File Description / Chapter details</label>
          <textarea 
            id="upl-desc" 
            rows="3" 
            placeholder="Mention topics covered in notes, author names, college name, etc."
            value={uploaderDesc}
            onChange={(e) => setUploaderDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Upload Document / File (PDF, DOCX, ZIP max 15MB)</label>
          
          <input 
            type="file" 
            id="upl-file-input" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          {!uploadedFile ? (
            <div 
              className={`drop-zone ${isDragOver ? "dragover" : ""}`}
              onClick={triggerFileSelection}
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleFileDrop}
            >
              <span className="drop-zone-icon">📁</span>
              <span className="drop-zone-text">Drag files here or <span style={{ color: "var(--primary)", textDecoration: "underline" }}>click to browse</span></span>
              <span className="drop-zone-subtext">PDF format preferred for layout compatibility</span>
            </div>
          ) : (
            <div className="file-preview-box">
              <span>
                📄 <strong id="preview-filename">{uploadedFile.name} ({(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)</strong>
              </span>
              <button type="button" className="remove-file-btn" onClick={handleRemoveUploadedFile}>
                Remove File
              </button>
            </div>
          )}
        </div>

        <button type="submit" id="upload-submit-btn" className="primary-btn" disabled={isUploading}>
          {isUploading ? "Uploading Document..." : "Submit Contribution"}
        </button>
      </form>

      {uploadSuccess && (
        <div className="form-success-overlay">
          <div className="success-box">
            <span className="success-icon">🎉</span>
            <h2>Thank You, Scholar!</h2>
            <p>
              Your document has been sent to our moderators. Once verified against KTU academic benchmarks, it will go live with your contribution credits!
            </p>
            <button className="primary-btn" onClick={resetUploaderForm}>
              Upload Another Document
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ContributeForm;
