import React, { useState, useEffect } from "react";
import academicDb from "../../data/db";

export function SearchPanel({ navigateTo, setActiveMaterialTab }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterNotes, setFilterNotes] = useState(true);
  const [filterSyllabus, setFilterSyllabus] = useState(true);
  const [filterQPs, setFilterQPs] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    let results = [];

    Object.keys(academicDb.subjects).forEach(sem => {
      const semBranches = academicDb.subjects[sem];
      Object.keys(semBranches).forEach(branch => {
        if (branch === "common") return;
        const courses = semBranches[branch];
        courses.forEach(sub => {
          const matchesQuery = sub.code.toLowerCase().includes(query) || sub.name.toLowerCase().includes(query);
          if (matchesQuery) {
            if (filterNotes) {
              results.push({
                code: sub.code,
                name: sub.name,
                type: "Notes Bundle",
                badgeClass: "badge-notes",
                desc: `Semester ${sem.replace("s", "")} | ${branch.toUpperCase()} branch module notes`,
                hash: `#semesters/${sem}/${branch}/${encodeURIComponent(sub.code)}`,
                tab: "tab-notes"
              });
            }
            if (filterSyllabus) {
              results.push({
                code: sub.code,
                name: sub.name,
                type: "Syllabus",
                badgeClass: "badge-syllabus",
                desc: "KTU credits mapping and topics checklist",
                hash: `#semesters/${sem}/${branch}/${encodeURIComponent(sub.code)}`,
                tab: "tab-syllabus"
              });
            }
            if (filterQPs) {
              results.push({
                code: sub.code,
                name: sub.name,
                type: "University QP",
                badgeClass: "badge-qp",
                desc: "Previous Year papers and model solved answers",
                hash: `#semesters/${sem}/${branch}/${encodeURIComponent(sub.code)}`,
                tab: "tab-pyq"
              });
            }
          }
        });
      });
    });

    const uniqueResults = [];
    const seenCombos = new Set();
    results.forEach(item => {
      const comboKey = `${item.code}_${item.type}`;
      if (!seenCombos.has(comboKey)) {
        seenCombos.add(comboKey);
        uniqueResults.push(item);
      }
    });

    setSearchResults(uniqueResults);
  }, [searchQuery, filterNotes, filterSyllabus, filterQPs]);

  const triggerResultClick = (hash, tab) => {
    navigateTo(hash)
    setTimeout(() => setActiveMaterialTab(tab), 100)
  }

  return (
    <div className="search-engine-container">
      <div className="search-bar-wrapper">
        <svg className="search-icon-svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input 
          type="text" 
          placeholder="Search e.g. Data Structures, MAT 101, Discrete maths..."
          id="global-search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="search-filters">
        <label className="filter-chip">
          <input 
            type="checkbox" 
            checked={filterNotes} 
            onChange={(e) => setFilterNotes(e.target.checked)}
          />
          <span>📖 Notes</span>
        </label>
        <label className="filter-chip">
          <input 
            type="checkbox" 
            checked={filterSyllabus} 
            onChange={(e) => setFilterSyllabus(e.target.checked)}
          />
          <span>📋 Syllabus</span>
        </label>
        <label className="filter-chip">
          <input 
            type="checkbox" 
            checked={filterQPs} 
            onChange={(e) => setFilterQPs(e.target.checked)}
          />
          <span>📝 QP / Models</span>
        </label>
      </div>

      <div className="results-meta">
        Matching Records Found: <span>{searchResults.length}</span>
      </div>

      <div className="results-list">
        {searchQuery.length < 2 ? (
          <div className="empty-state" style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
            Type at least 2 characters to search...
          </div>
        ) : searchResults.length === 0 ? (
          <div className="empty-state" style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
            No results match &quot;{searchQuery}&quot; with selected filters.
          </div>
        ) : (
          searchResults.map((item, index) => (
            <div 
              key={index} 
              className="search-result-item"
              onClick={() => triggerResultClick(item.hash, item.tab)}
            >
              <div className="search-result-details">
                <strong style={{ color: "var(--primary)", fontSize: "0.85rem" }}>{item.code}</strong>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
              <span className={`search-result-type-badge ${item.badgeClass}`}>{item.type}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default SearchPanel;
