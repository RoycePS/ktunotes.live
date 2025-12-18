import React from "react";

export function MainGrid({ navigateTo, setIsSemesterModalOpen }) {
  return (
    <div className="home-grid">
      <div className="home-card">
        <div className="card-glow-bg"></div>
        <div className="card-icon-container">
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
          </svg>
        </div>
        <h3>B.Tech Semesters</h3>
        <p>Select your semester and department branch to download subject wise study packages, notes, syllabus blueprints and solved previous papers.</p>
        <div className="card-status-info">
          <span className="status-indicator-green"></span>
          <span>Active 2024 and 2019 Scheme Database</span>
        </div>
        <div className="card-buttons">
          <button className="card-btn primary" onClick={() => setIsSemesterModalOpen(true)}>Browse Notes</button>
        </div>
      </div>

      <div className="home-card">
        <div className="card-glow-bg"></div>
        <div className="card-icon-container" style={{ color: "var(--accent-yellow)" }}>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0-2-.9-2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm0 8H7v-2h10v2z"/>
          </svg>
        </div>
        <h3>SGPA Calculator</h3>
        <p>Calculate your semester grades against standard university credits criteria. Multi scheme weight support for 2019/2024 batches.</p>
        <div className="card-status-info">
          <span className="status-indicator-green"></span>
          <span>Accurate Credit Weight Logic</span>
        </div>
        <div className="card-buttons">
          <button className="card-btn primary-yellow" onClick={() => navigateTo("#gpa")}>Open Calculator</button>
        </div>
      </div>

      <div className="home-card">
        <div className="card-glow-bg"></div>
        <div className="card-icon-container" style={{ color: "var(--secondary)" }}>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
          </svg>
        </div>
        <h3>Join Communities</h3>
        <p>Find peer classrooms and coordinate discussion logs on WhatsApp or Telegram. Connect instantly to get real time files.</p>
        <div className="card-status-info">
          <span className="status-indicator-green"></span>
          <span>80,000+ Active Members Kerala wide</span>
        </div>
        <div className="card-buttons">
          <button className="card-btn primary-green" onClick={() => setIsSemesterModalOpen(true)}>Join Groups</button>
        </div>
      </div>

      <div className="home-card">
        <div className="card-glow-bg"></div>
        <div className="card-icon-container" style={{ color: "hsl(141, 73%, 42%)" }}>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.5 13.5c-.2.3-.5.4-.8.2-2.1-1.3-4.8-1.6-8-1-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.5-.8 6.5-.4 8.9 1 .3.2.4.5.2.9zm1.2-2.7c-.3.4-.8.5-1.2.3-2.4-1.5-6.1-1.9-9-1-.5.1-1-.2-1.1-.7-.1-.5.2-1 .7-1.1 3.3-1 7.4-.5 10.2 1.2.4.3.5.8.4 1.3zm.1-2.9C14.4 7.7 8.8 7.5 5.6 8.5c-.5.2-1.1-.1-1.2-.7-.2-.5.1-1.1.7-1.2C8.7 5.5 14.9 5.7 18.9 8c.5.3.6.9.3 1.4-.3.5-.9.6-1.4.3z"/>
          </svg>
        </div>
        <h3>Spotify Study Podcast</h3>
        <p>Listen to audio based summaries of complex tech regulations, student hackathons and educational shortcuts curated on Spotify.</p>
        <div className="card-status-info">
          <span className="bullet">•</span>
          <span>KTU Audio Study Room</span>
        </div>
        <div className="card-buttons">
          <button className="card-btn primary-spotify" onClick={() => alert("Redirecting to Study Pods on Spotify...")}>Open Podcast</button>
        </div>
      </div>

      <div className="home-card">
        <div className="card-glow-bg"></div>
        <div className="card-icon-container" style={{ color: "hsl(0, 100%, 50%)" }}>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41c-.86.24-1.54.92-1.78 1.78C2 8.75 2 12 2 12s0 3.25.41 4.81c.24.86.92 1.54 1.78 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41c.86-.24 1.54-.92 1.77-1.78C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.96 14.7v-5.4l5.21 2.7-5.21 2.7z"/>
          </svg>
        </div>
        <h3>YouTube Online Classes</h3>
        <p>Access free lecture video directories mapped alongside note modules. Learn visual explanations of mechanical drawings and network circuits.</p>
        <div className="card-status-info">
          <span className="status-indicator-green"></span>
          <span>150+ Dynamic Video Links</span>
        </div>
        <div className="card-buttons">
          <button className="card-btn primary-red" onClick={() => navigateTo("#suggestions")}>Browse Videos</button>
        </div>
      </div>

      <div className="home-card">
        <div className="card-glow-bg"></div>
        <div className="card-icon-container" style={{ color: "var(--text-main)" }}>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
          </svg>
        </div>
        <h3>Open Source Repo</h3>
        <p>Contribute notes directly via Git pull requests. Join developer contributors keeping the core KTU notes stack up to date.</p>
        <div className="card-status-info">
          <span className="bullet">•</span>
          <span>GitHub Core Portal</span>
        </div>
        <div className="card-buttons">
          <button className="card-btn outline-github" onClick={() => alert("Redirecting to GitHub code repository...")}>View on GitHub</button>
        </div>
      </div>
    </div>
  );
}
export default MainGrid;
