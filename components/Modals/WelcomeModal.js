import React from "react";

export function WelcomeModal({ isOpen, onClose, navigateTo }) {
  const triggerPrivacy = () => {
    onClose()
    navigateTo("#privacy")
  }

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <div className="modal-container">
        <button className="modal-close-btn" id="close-welcome-x" onClick={onClose}>
          ✕
        </button>
        <div className="welcome-card">
          <div className="logo-animation-container">
            <svg viewBox="0 0 24 24" width="70" height="70" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.57l6.11 3.33 6.11-3.33v-2.86l-6.11 3.33-6.11-3.33v-2.86z"/>
            </svg>
          </div>
          <div className="welcome-header">
            <h1>Welcome to KTUNOTES!</h1>
            <p className="subtitle">Official B.Tech Academic Resources Community</p>
          </div>
          <div className="welcome-actions">
            <button className="comm-btn whatsapp-btn" onClick={() => alert("Joining WhatsApp Discussion Group...")}>
              💬 Join S1-S8 WhatsApp Discussions
            </button>
            <button className="comm-btn whatsapp-channel-btn" onClick={() => alert("Following WhatsApp Notification Channel...")}>
              📢 Follow WhatsApp Notification Channel
            </button>
            <button className="comm-btn telegram-btn" onClick={() => alert("Joining Telegram Group...")}>
              ✈️ Join Telegram Chat Channel
            </button>
          </div>

          <div className="social-icons-row">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("YouTube channel link clicked"); }}>YouTube</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Spotify Podcast link clicked"); }}>Spotify Study Room</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("GitHub repo link clicked"); }}>GitHub Devs</a>
          </div>

          <button className="primary-modal-btn" id="close-welcome-btn" onClick={onClose}>
            CLOSE and CONTINUE
          </button>
          <div className="modal-footer-notes">
            By using our portal you agree to our <span style={{ color: "var(--primary)", cursor: "pointer", fontWeight: "600" }} onClick={triggerPrivacy}>Privacy Guidelines</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
export default WelcomeModal;
