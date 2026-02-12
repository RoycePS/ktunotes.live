"use client";

import { useState, useEffect } from "react";
import { useHash } from "../hooks/useHash";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { WelcomeModal } from "../components/Modals/WelcomeModal";
import { SemesterModal } from "../components/Modals/SemesterModal";
import { Hero } from "../components/Home/Hero";
import { Carousel } from "../components/Home/Carousel";
import { PromoBanner } from "../components/Home/PromoBanner";
import { MainGrid } from "../components/Home/MainGrid";
import { SgpaCalc } from "../components/Calculator/SgpaCalc";
import { SearchPanel } from "../components/Search/SearchPanel";
import { SemBrowser } from "../components/Browser/SemBrowser";
import { SubjectDashboard } from "../components/Browser/SubjectDashboard";
import { ContributeForm } from "../components/Upload/ContributeForm";
import { ExamTimetable } from "../components/Timetable/ExamTimetable";
import { DeptStats } from "../components/Stats/DeptStats";
import { GenericContent } from "../components/Generic/GenericContent";
import genericPages from "../data/pages";

export default function Home() {
  const [currentHash, navigateTo] = useHash();
  const [theme, setTheme] = useState("dark");
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [isSemesterModalOpen, setIsSemesterModalOpen] = useState(false);
  const [readingCount, setReadingCount] = useState(247);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeMaterialTab, setActiveMaterialTab] = useState("tab-notes");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (!sessionStorage.getItem("welcome-dismissed")) {
      setIsWelcomeOpen(true);
    }

    const readingInterval = setInterval(() => {
      setReadingCount(prev => {
        const delta = Math.floor(Math.random() * 11) - 5;
        return Math.max(180, Math.min(350, prev + delta));
      });
    }, 4000);

    const carouselInterval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(readingInterval);
      clearInterval(carouselInterval);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const dismissWelcomeModal = () => {
    setIsWelcomeOpen(false);
    sessionStorage.setItem("welcome-dismissed", "true");
  };

  const changeSlide = (index) => {
    setCarouselIndex((index + 4) % 4);
  };

  const pathParts = currentHash.split("/");
  const primaryRoute = pathParts[0] || "#home";
  const routeSem = pathParts[1] || "s1";
  const routeBranch = pathParts[2] || "";
  const routeSubject = pathParts[3] ? decodeURIComponent(pathParts[3]) : "";
  const semesterNum = routeSem.replace("s", "");

  const isGenericPage = !!genericPages[primaryRoute];

  return (
    <>
      <Header 
        currentHash={currentHash}
        navigateTo={navigateTo}
        theme={theme}
        setTheme={setTheme}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setIsSemesterModalOpen={setIsSemesterModalOpen}
      />

      <div className="reading-stats-bar">
        <span className="pulse-indicator"></span>
        <span>
          <strong id="reading-count">{readingCount}</strong> KTU B.Tech Students are reading notes online right now!
        </span>
      </div>

      <main className="content-container">
        {primaryRoute === "#home" && (
          <section className="app-view active">
            <Hero />
            <Carousel 
              carouselIndex={carouselIndex}
              setCarouselIndex={setCarouselIndex}
              changeSlide={changeSlide}
              navigateTo={navigateTo}
            />
            <div className="explore-materials-container">
              <button className="explore-materials-btn" onClick={() => setIsSemesterModalOpen(true)}>
                <svg className="cap-icon" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.57l6.11 3.33 6.11-3.33v-2.86l-6.11 3.33-6.11-3.33v-2.86z"/>
                </svg>
                <span>EXPLORE STUDY MATERIALS</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </button>
            </div>
            <MainGrid navigateTo={navigateTo} setIsSemesterModalOpen={setIsSemesterModalOpen} />
            <PromoBanner />
          </section>
        )}

        {primaryRoute === "#semesters" && (
          <section className="app-view active">
            <div className="view-header">
              <div className="breadcrumbs">
                <a onClick={() => navigateTo("#home")}>Home</a>
                {" > "}
                <span className="active-bread" id="bread-sem">Semester {semesterNum}</span>
                {routeBranch && (
                  <>
                    {" > "}
                    <a onClick={() => navigateTo(`#semesters/${routeSem}`)}>{routeBranch.toUpperCase()}</a>
                  </>
                )}
                {routeSubject && (
                  <>
                    {" > "}
                    <span className="active-bread">{routeSubject}</span>
                  </>
                )}
              </div>

              <h1 id="semester-view-title">
                {!routeBranch 
                  ? `Semester ${semesterNum} - Study Materials` 
                  : !routeSubject 
                    ? `${routeBranch.toUpperCase()} - Semester ${semesterNum}` 
                    : routeSubject
                }
              </h1>
              <p className="view-subtitle" id="semester-view-desc">
                {!routeBranch 
                  ? "Select your department/branch to view subjects." 
                  : !routeSubject 
                    ? "Select subject course code to view specific notes."
                    : ""
                }
              </p>
            </div>

            {!routeSubject ? (
              <SemBrowser 
                currentHash={currentHash}
                navigateTo={navigateTo}
                routeSem={routeSem}
                routeBranch={routeBranch}
                routeSubject={routeSubject}
              />
            ) : (
              <SubjectDashboard 
                routeSem={routeSem}
                routeBranch={routeBranch}
                routeSubject={routeSubject}
                activeMaterialTab={activeMaterialTab}
                setActiveMaterialTab={setActiveMaterialTab}
                navigateTo={navigateTo}
              />
            )}
          </section>
        )}

        {primaryRoute === "#gpa" && (
          <section className="app-view active">
            <div className="view-header" style={{ textAlign: "center" }}>
              <h1>KTU SGPA Calculator</h1>
              <p className="view-subtitle">Conforms with official APJ KTU B.Tech scheme credit point weights</p>
            </div>
            <SgpaCalc />
          </section>
        )}

        {primaryRoute === "#search" && (
          <section className="app-view active">
            <div className="view-header" style={{ textAlign: "center" }}>
              <h1>Unified Academic Search Engine</h1>
              <p className="view-subtitle">Search notes, syllabus blueprints and exam models by code or name</p>
            </div>
            <SearchPanel navigateTo={navigateTo} setActiveMaterialTab={setActiveMaterialTab} />
          </section>
        )}

        {primaryRoute === "#timetable" && (
          <section className="app-view active">
            <div className="view-header">
              <h1>KTU Exam Schedules</h1>
              <p className="view-subtitle">Direct feed from official APJ Technological University exam board</p>
            </div>
            <ExamTimetable />
          </section>
        )}

        {primaryRoute === "#upload" && (
          <section className="app-view active">
            <div className="view-header" style={{ textAlign: "center" }}>
              <h1>Contribute Study Materials</h1>
              <p className="view-subtitle">Earn activity points and badges by sharing high-quality study documents</p>
            </div>
            <ContributeForm />
          </section>
        )}

        {primaryRoute === "#departments" && (
          <section className="app-view active">
            <div className="view-header">
              <h1>Academic Departments</h1>
              <p className="view-subtitle">Explore notes repository volume distribution across engineering streams</p>
            </div>
            <DeptStats navigateTo={navigateTo} />
          </section>
        )}

        {isGenericPage && (
          <GenericContent primaryRoute={primaryRoute} />
        )}
      </main>

      <Footer navigateTo={navigateTo} setIsSemesterModalOpen={setIsSemesterModalOpen} />

      <WelcomeModal 
        isOpen={isWelcomeOpen} 
        onClose={dismissWelcomeModal} 
        navigateTo={navigateTo} 
      />

      <SemesterModal 
        isOpen={isSemesterModalOpen}
        onClose={() => setIsSemesterModalOpen(false)}
        navigateTo={navigateTo}
      />
    </>
  );
}
