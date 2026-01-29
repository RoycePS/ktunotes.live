import React from "react";

export function ExamTimetable() {
  return (
    <div className="timetable-content-grid">
      <div className="timetable-card">
        <h3>B.Tech Regular Time Table (2024 Scheme)</h3>
        <div className="timetable-colors-desc" style={{ marginBottom: "15px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Ensure to match the courses code values against your registration portal.
        </div>
        <div className="timetable-dates-list">
          <div className="date-row">
            <span className="date">July 14, 2026 (Monday)</span>
            <span className="slot">9:30 AM - 12:30 PM | Slot A</span>
            <span className="sub">MAT 101 - Linear Algebra and Calculus</span>
          </div>
          <div className="date-row">
            <span className="date">July 17, 2026 (Thursday)</span>
            <span className="slot">9:30 AM - 12:30 PM | Slot B</span>
            <span className="sub">CYT 100 - Engineering Chemistry</span>
          </div>
          <div className="date-row">
            <span className="date">July 20, 2026 (Monday)</span>
            <span className="slot">9:30 AM - 12:30 PM | Slot C</span>
            <span className="sub">EST 100 - Engineering Mechanics</span>
          </div>
        </div>
      </div>

      <div className="timetable-card">
        <h3>B.Tech S3 Regular (2019 Scheme)</h3>
        <div className="timetable-colors-desc" style={{ marginBottom: "15px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Ensure to match the courses code values against your registration portal.
        </div>
        <div className="timetable-dates-list">
          <div className="date-row">
            <span className="date">July 15, 2026 (Wednesday)</span>
            <span className="slot">1:30 PM - 4:30 PM | Slot A</span>
            <span className="sub">MAT 203 - Discrete Mathematical Structures</span>
          </div>
          <div className="date-row">
            <span className="date">July 18, 2026 (Saturday)</span>
            <span className="slot">1:30 PM - 4:30 PM | Slot B</span>
            <span className="sub">CST 201 - Data Structures</span>
          </div>
          <div className="date-row">
            <span className="date">July 22, 2026 (Wednesday)</span>
            <span className="slot">1:30 PM - 4:30 PM | Slot C</span>
            <span className="sub">CST 203 - Logic System Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExamTimetable;
