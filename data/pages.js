const genericPages = {
  "#points": {
    title: "KTU Activity Points Guide",
    desc: "Complete details on how to earn 100 activity points required for the B.Tech degree.",
    body: `
      <h3>Activity Points Category Breakdown</h3>
      <p>As per APJ Abdul Kalam Technological University regulations every student must earn 100 activity points for the award of B.Tech degree. Points can be earned under 7 major heads:</p>
      <ul>
        <li><strong>National Initiatives (NSS/NCC):</strong> Up to 50 points per year (e.g. 24 points for NSS membership, 40 points for camps).</li>
        <li><strong>Sports and Games:</strong> Representation at zonal levels (10 points), University level (20 points), National level (40 points).</li>
        <li><strong>Cultural Activities:</strong> College level event winners (10 points), University level winners (20 points).</li>
        <li><strong>Professional Self Initiatives:</strong> IEEE/CSI/IET/IEDC student memberships (15 points), organizing workshops (10 points).</li>
        <li><strong>Entrepreneurship and Innovation:</strong> Startups registered (50 points), Patent filing (50 points), IEDC project development (30 points).</li>
        <li><strong>Technical Certifications:</strong> NPTEL/Coursera/MOOC certifications (10-20 points based on duration).</li>
        <li><strong>Community service:</strong> Blood donation (8 points per donation), disaster relief campaigns (15 points).</li>
      </ul>
    `
  },
  "#internships": {
    title: "Internships and Career Hub",
    desc: "Access verified student internship opportunities, training portals and industry projects.",
    body: `
      <h3>Featured Internship Opportunities</h3>
      <p>Looking to build practical skills? Check out these active student internship portals recommended by peers:</p>
      <ul>
        <li><strong>AICTE Internship Portal:</strong> Offers government verified technical internships across private and public sectors.</li>
        <li><strong>ASAP Kerala Training:</strong> State level skill development agency offering internship tie ups with leading tech giants.</li>
        <li><strong>Kerala Startup Mission (KSUM):</strong> Get startup internship opportunities in high growth fields (Web3, IoT, AI).</li>
        <li><strong>GitHub Externship Program:</strong> Open source project development internships with corporate mentors.</li>
      </ul>
    `
  },
  "#minor": {
    title: "Minor Degree Study Materials",
    desc: "Curriculum guides, study notes, and syllabus drafts for KTU B.Tech Minor paths.",
    body: `
      <h3>B.Tech Minor Paths</h3>
      <p>Minor programs allow students to specialize in a stream other than their parent branch. Popular minors include:</p>
      <ul>
        <li>Computer Science (for non-CSE branches)</li>
        <li>Robotics and Automation</li>
        <li>Financial Engineering</li>
        <li>Renewable Energy Systems</li>
      </ul>
      <p>To view study material bundles for Minor courses, check the specific subjects under Semester 3 to Semester 8 browsers.</p>
    `
  },
  "#honours": {
    title: "Honours Degree Research Papers",
    desc: "Advanced reading material, seminar topics, and research journals for Honours track students.",
    body: `
      <h3>KTU B.Tech Honours Track</h3>
      <p>The Honours degree requires students to maintain a CGPA above 8.5 and complete 12 additional credits. Materials available:</p>
      <ul>
        <li>Advanced Algorithm Analysis (CSE)</li>
        <li>Deep Learning and Neural Architectures</li>
        <li>Computational Fluid Dynamics (ME)</li>
        <li>Advanced Digital Signal Processing (ECE)</li>
      </ul>
    `
  },
  "#alerts": {
    title: "KTU Notification Alerts Desk",
    desc: "Real time updates directly fetched from the official KTU notification portal.",
    body: `
      <h3>Active Notification Alerts</h3>
      <ul>
        <li><strong>July 06, 2026:</strong> B.Tech S8 Regular and Supplementary Examinations time table published.</li>
        <li><strong>July 02, 2026:</strong> Registration date extended for B.Tech S4 supplementary exams till July 10.</li>
        <li><strong>June 28, 2026:</strong> Revaluation results of S1/S2 examinations declared. Register in student portal.</li>
      </ul>
    `
  },
  "#suggestions": {
    title: "Suggestions and Class Sharing Desk",
    desc: "Help us expand the repository by sharing class recordings, Youtube tutorials or study shortcuts.",
    body: `
      <h3>Share YouTube Classes</h3>
      <p>Have you come across an exceptionally good YouTube video explaining a complex KTU module? Let us know!</p>
      <ul>
        <li>Include the subject code and module number.</li>
        <li>Drop the video link in our WhatsApp Suggestion Box.</li>
        <li>Once reviewed, we will map the video classes directly next to the module notes.</li>
      </ul>
    `
  },
  "#help": {
    title: "Student Help and Resource Center",
    desc: "Frequently Asked Questions about KTU policies, academic credits, grading, and website usage.",
    body: `
      <h3>Frequently Asked Questions (FAQ)</h3>
      <p><strong>Q: What is the minimum grade to pass a subject?</strong><br>A: A minimum of 40% in End Semester Exams (ESA) and 40% aggregate (ESA + Internal Assessment) is needed to pass. Grade 'P' is the passing grade.</p>
      <p><strong>Q: How is CGPA calculated from SGPA?</strong><br>A: CGPA = Sum(SGPA * SemesterCredits) / Sum(TotalCredits).</p>
      <p><strong>Q: How do I submit corrections in notes?</strong><br>A: Click the "Give Feedback" button on the homepage, or submit an issue directly on our GitHub repository.</p>
    `
  },
  "#contact": {
    title: "Contact KTUNOTES Team",
    desc: "Get in touch with community administrators for content requests, ad spaces, or general questions.",
    body: `
      <h3>Reach Out to Us</h3>
      <p>We are always looking to improve! Feel free to send us an email or drop a message on social platforms:</p>
      <ul>
        <li><strong>General Inquiries:</strong> support@ktunotes.live</li>
        <li><strong>Advertisement Space Booking:</strong> ads@ktunotes.live</li>
        <li><strong>Emergency Notes Request:</strong> Join the WhatsApp channel and ping the admins.</li>
      </ul>
    `
  },
  "#status": {
    title: "KTUNOTES System Status",
    desc: "Operational status dashboard for academic databases, CDN, and uploader services.",
    body: `
      <h3>Service Performance Metrics</h3>
      <ul>
        <li><strong>Web Server CDN:</strong> Operational (99.98% uptime)</li>
        <li><strong>Notes Database (Google Drive API):</strong> Operational</li>
        <li><strong>SGPA Calculation Engine:</strong> Operational</li>
        <li><strong>Mock Uploader Service:</strong> Operational</li>
      </ul>
    `
  },
  "#isp": {
    title: "ISP CDN Speeds Portal",
    desc: "Optimized routing pathways based on local ISP latency reports across Kerala.",
    body: `
      <h3>ISP Performance Ratings</h3>
      <ul>
        <li><strong>Jio Fiber:</strong> Excellent (4ms latency to CDN)</li>
        <li><strong>BSNL FTTH:</strong> Good (12ms latency to CDN)</li>
        <li><strong>Asianet Broadband:</strong> Good (9ms latency)</li>
        <li><strong>Airtel Xstream:</strong> Excellent (5ms latency)</li>
      </ul>
    `
  },
  "#privacy": {
    title: "Privacy and Cookies Policy",
    desc: "Detailed statement on data handling, browser caches, and student profile privacy.",
    body: `
      <h3>Your Data Security</h3>
      <p>We respect your privacy. KTUNOTES.LIVE does not harvest, share, or sell any personal student data. We use local storage purely to remember your theme choice, login session state, and calculated GPA locally on your device.</p>
    `
  },
  "#terms": {
    title: "Terms and Conditions",
    desc: "Legal guidelines on website resources usage, open source contributions, and liabilities.",
    body: `
      <h3>Terms of Use</h3>
      <p>The materials provided on KTUNOTES.LIVE are uploaded by volunteers, teachers, and peers for academic aid. We do not hold copyrights of official university syllabus materials. Use these as references alongside official university guidelines.</p>
    `
  },
  "#profile": {
    title: "Student Profile",
    desc: "Manage your registered courses, contribution scores, and saved calculators.",
    body: `
      <h3>Welcome, Scholar!</h3>
      <p>Unlock contribution badges by uploading quality documents. Registered details:</p>
      <ul>
        <li><strong>Status:</strong> Active Student</li>
        <li><strong>Contributions:</strong> 0 Documents approved</li>
        <li><strong>Saved GPA Computations:</strong> 0 Saved</li>
      </ul>
    `
  },
  "#login": {
    title: "Student Portal Login",
    desc: "Access personalized dashboard, course alerts, and upload permissions.",
    body: `
      <div style="max-width: 320px; margin: 20px auto; text-align: center;">
        <p style="margin-bottom: 15px;">Enter WhatsApp Number to receive verify OTP</p>
        <input type="text" placeholder="+91 9876543210" style="padding:12px; width:100%; border: 1px solid var(--border); background-color: var(--bg-input); color: var(--text-main); border-radius: 8px; margin-bottom: 12px; text-align: center;">
        <button class="primary-btn wide-btn" onclick="alert('OTP sent to WhatsApp!')">Request OTP</button>
      </div>
    `
  }
};

export default genericPages;
