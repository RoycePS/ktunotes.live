import React from "react";

export function Footer({ navigateTo, setIsSemesterModalOpen }) {
  const triggerSem = (sem) => {
    setIsSemesterModalOpen(false)
    navigateTo("#semesters/" + sem)
  }

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-logo-col">
          <div className="footer-logo">
            <svg className="logo-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.57l6.11 3.33 6.11-3.33v-2.86l-6.11 3.33-6.11-3.33v-2.86z"/>
            </svg>
            <span>KTUNOTES.LIVE</span>
          </div>
          <p>
            A community driven resource hub built to assist engineering scholars across Kerala with high fidelity handwritten lectures, syllabus guides and solved previous papers.
          </p>
          <div className="donate-btn-pulse" onClick={() => alert("Redirecting to support donation link...")}>
            ☕ Support Server Uptime
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Quick Semesters</h4>
          <ul>
            <li><button className="footer-sem-link" onClick={() => triggerSem("s1")}>Semester 1</button></li>
            <li><button className="footer-sem-link" onClick={() => triggerSem("s2")}>Semester 2</button></li>
            <li><button className="footer-sem-link" onClick={() => triggerSem("s3")}>Semester 3</button></li>
            <li><button className="footer-sem-link" onClick={() => triggerSem("s4")}>Semester 4</button></li>
            <li><button className="footer-sem-link" onClick={() => triggerSem("s5")}>Semester 5</button></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Study Tools</h4>
          <ul>
            <li><a href="#gpa" onClick={(e) => { e.preventDefault(); navigateTo("#gpa"); }}>SGPA Calculator</a></li>
            <li><a href="#upload" onClick={(e) => { e.preventDefault(); navigateTo("#upload"); }}>Upload Document</a></li>
            <li><a href="#timetable" onClick={(e) => { e.preventDefault(); navigateTo("#timetable"); }}>Timetables</a></li>
            <li><a href="#points" onClick={(e) => { e.preventDefault(); navigateTo("#points"); }}>Activity Points</a></li>
            <li><a href="#internships" onClick={(e) => { e.preventDefault(); navigateTo("#internships"); }}>Internship Hub</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Legal and Status</h4>
          <ul>
            <li><a href="#status" onClick={(e) => { e.preventDefault(); navigateTo("#status"); }}>Server Status</a></li>
            <li><a href="#isp" onClick={(e) => { e.preventDefault(); navigateTo("#isp"); }}>ISP Speeds Portal</a></li>
            <li><a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo("#privacy"); }}>Privacy Policy</a></li>
            <li><a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo("#terms"); }}>Terms of Use</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo("#contact"); }}>Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © 2026 KTUNOTES.LIVE. Designed with premium glassmorphism accents.
        </div>
        <div className="credits">
          Made with love by <a href="https://github.com/iamagoodboy1234" target="_blank" rel="noopener noreferrer">iamagoodboy1234</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
