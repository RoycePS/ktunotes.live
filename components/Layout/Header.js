import React from "react";

export function Header({ currentHash, navigateTo, theme, setTheme, isAuthenticated, setIsAuthenticated, mobileMenuOpen, setMobileMenuOpen, setIsSemesterModalOpen }) {
  const pathParts = currentHash.split("/");
  const primaryRoute = pathParts[0] || "#home";

  const triggerAuth = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false)
      alert("Logged out successfully!")
    } else {
      navigateTo("#login")
    }
  }

  return (
    <header className="main-header">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); navigateTo("#home"); }}>
        <svg className="logo-icon" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.57l6.11 3.33 6.11-3.33v2.86l-6.11 3.33-6.11-3.33v-2.86z"/>
        </svg>
        <span>KTUNOTES.LIVE</span>
      </a>

      <nav className="main-nav" style={{ display: mobileMenuOpen ? "block" : "" }}>
        <ul>
          <li>
            <a 
              href="#home" 
              className={`nav-link ${primaryRoute === "#home" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); navigateTo("#home"); }}
            >
              Home
            </a>
          </li>
          <li>
            <button 
              className={`nav-link-btn ${primaryRoute === "#semesters" ? "active" : ""}`}
              onClick={() => setIsSemesterModalOpen(true)}
            >
              Semesters
            </button>
          </li>
          <li>
            <a 
              href="#semesters/s1" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("#semesters/s1");
              }}
            >
              Syllabus
            </a>
          </li>
          <li>
            <a 
              href="#semesters/s1" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("#semesters/s1");
              }}
            >
              PYQ
            </a>
          </li>
          <li className="dropdown-container">
            <span className="nav-dropdown-trigger">
              More
              <svg className="dropdown-chevron" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M7 10l5 5 5-5H7z"/>
              </svg>
            </span>
            <ul className="dropdown-menu">
              <li><a href="#gpa" onClick={(e) => { e.preventDefault(); navigateTo("#gpa"); }}>SGPA Calculator</a></li>
              <li><a href="#upload" onClick={(e) => { e.preventDefault(); navigateTo("#upload"); }}>Upload Material</a></li>
              <li><a href="#timetable" onClick={(e) => { e.preventDefault(); navigateTo("#timetable"); }}>KTU Timetable</a></li>
              <li><a href="#points" onClick={(e) => { e.preventDefault(); navigateTo("#points"); }}>Activity Points</a></li>
              <li><a href="#minor" onClick={(e) => { e.preventDefault(); navigateTo("#minor"); }}>Minor Degree</a></li>
              <li><a href="#honours" onClick={(e) => { e.preventDefault(); navigateTo("#honours"); }}>Honours Track</a></li>
              <li><a href="#alerts" onClick={(e) => { e.preventDefault(); navigateTo("#alerts"); }}>Notification Alerts</a></li>
            </ul>
          </li>
          <li>
            <a 
              href="#search" 
              className={`nav-link ${primaryRoute === "#search" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); navigateTo("#search"); }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              Search
            </a>
          </li>
        </ul>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button 
          className="theme-toggle-btn" 
          onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
        >
          <svg className="sun-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10C2.2 6.8 6.4 2.5 11.8 2c.5 0 .8.3.9.7.1.4-.1.8-.5 1-1.6 1-2.5 2.8-2.5 4.8 0 3 2.5 5.5 5.5 5.5 2 0 3.8-1 4.8-2.5.2-.4.7-.6 1.1-.5.4.1.7.5.7.9-.5 5.4-4.8 9.6-10.2 9.6z"/>
          </svg>
          <span className="theme-text">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        
        <button 
          id="auth-action-btn" 
          className="outline-btn" 
          style={{ padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem" }}
          onClick={triggerAuth}
        >
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </button>

        <button className="mobile-nav-toggle" onClick={() => setMobileMenuOpen(prev => !prev)}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
