import React, { memo } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from 'react-starfield';
import { Typed as ReactTyped } from 'react-typed';

//
// 1) Starfield & Navbar (unchanged except we kept your responsive approach)
//
const MemoStarfield = memo(() => {
  return (
    <Starfield
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      starCount={10000}
      starColor={[255, 255, 255]}
      speedFactor={0.05}
      backgroundColor="black"
    />
  );
});

const Navbar = memo(() => {
  const mobileStyles = `
    @media (max-width: 600px) {
      .navbar-responsive {
        flex-wrap: wrap; /* allow wrapping links */
        height: auto;    /* let height expand */
        padding: 0.5rem 0;
      }
      .navbar-responsive a {
        margin: 0.25rem 1rem;
        font-size: 1rem;
      }
    }
  `;
  return (
    <nav
      className="navbar-responsive"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <style>{mobileStyles}</style>
      <Link
        to="/"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        home
      </Link>
      <Link
        to="/about"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        about
      </Link>
      <Link
        to="/projects"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        projects
      </Link>
      <Link
        to="/resume"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        resume
      </Link>
      <Link
        to="/contact"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        contact
      </Link>
    </nav>
  );
});

function Layout({ children }) {
  return (
    <>
      <MemoStarfield />
      <Navbar />
      {children}
    </>
  );
}

//
// 2) PageWrapper for transitions (same as your code, slightly shortened).
//
function PageWrapper({ children }) {
  const pageVariants = {
    initial: { opacity: 0, x: '100vw' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100vw' },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top: '60px',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </motion.div>
  );
}

//
// 3) Home Page with "Typed" effect
//
function HomePage() {
  return (
    <PageWrapper>
      {/* A typed-out animation using react-typed */}
      <ReactTyped
        strings={[
          "hi! i'm athul.",
          "welcome to my portfolio.",
          "explore my projects below!",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        style={{ color: '#fff', fontSize: '2rem', textAlign: 'center' }}
      />
      <p style={{ color: '#fff', margin: '1rem', textAlign: 'center' }}>
        i really hope this works lmao
      </p>
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <p style={{ color: '#4287f5' }}>more stuff about me</p>
    </PageWrapper>
  );
}

//
// 4) Projects Page with Hardware & Software sections
//    Each project: image on left, summary on right, link to detail page.
//
function ProjectsPage() {
  return (
    <PageWrapper>
      <div style={{ width: '80%', margin: '2rem auto', color: '#fff' }}>
        <h1 style={{ color: '#4287f5', marginBottom: '1.5rem' }}>projects</h1>

        {/* Hardware Section */}
        <h2 style={{ borderBottom: '2px solid #4287f5' }}>hardware</h2>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/hardware_project1.jpg"
            alt="Hardware Project 1"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/hardware/1"
                style={{ color: '#4287f5', textDecoration: 'none' }}
              >
                hardware project 1
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              A short summary about your hardware project. 
              Click the title to learn more.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/hardware_project2.jpg"
            alt="Hardware Project 2"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/hardware/2"
                style={{ color: '#4287f5', textDecoration: 'none' }}
              >
                hardware project 2
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              Another hardware project summary. 
              Describe microcontrollers, sensors, mechanics, etc.
            </p>
          </div>
        </div>

        {/* Software Section */}
        <h2 style={{ borderBottom: '2px solid #4287f5', marginTop: '3rem' }}>software</h2>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/software_project1.jpg"
            alt="Software Project 1"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/software/1"
                style={{ color: '#4287f5', textDecoration: 'none' }}
              >
                software project 1
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              A short summary about your software project. Maybe a web or mobile app.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/software_project2.jpg"
            alt="Software Project 2"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/software/2"
                style={{ color: '#4287f5', textDecoration: 'none' }}
              >
                software project 2
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              Another software project summary. 
              Perhaps an API, machine learning model, etc.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

//
// 5) Dedicated Project Detail Pages
//    (Example placeholders: hardwareProjectDetail, softwareProjectDetail)
//
function HardwareProjectDetail1() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#4287f5', marginBottom: '1rem' }}>
        Hardware Project 1
      </h2>
      <img
        src="/hardware_project1.jpg"
        alt="Hardware Project 1"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        Detailed info on hardware project 1. Explain your design process, 
        parts used, challenges, solutions, etc.
      </p>
    </PageWrapper>
  );
}
function HardwareProjectDetail2() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#4287f5', marginBottom: '1rem' }}>
        Hardware Project 2
      </h2>
      <img
        src="/hardware_project2.jpg"
        alt="Hardware Project 2"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        Another detailed description for hardware project 2.
      </p>
    </PageWrapper>
  );
}
function SoftwareProjectDetail1() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#4287f5', marginBottom: '1rem' }}>
        Software Project 1
      </h2>
      <img
        src="/software_project1.jpg"
        alt="Software Project 1"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        Detailed info on software project 1. Maybe a web app, mobile app, etc.
      </p>
    </PageWrapper>
  );
}
function SoftwareProjectDetail2() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#4287f5', marginBottom: '1rem' }}>
        Software Project 2
      </h2>
      <img
        src="/software_project2.jpg"
        alt="Software Project 2"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        Detailed info on software project 2. 
      </p>
    </PageWrapper>
  );
}

//
// 6) Resume & Contact (same as before, but shortened text).
//
function ResumePage() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#4287f5', marginBottom: '1rem' }}>resume</h2>
      <iframe
        src="/Athul_Resume.pdf"
        title="resume"
        style={{
          width: '80%',
          height: '60%',
          border: '2px solid #4287f5',
        }}
      />
      <p style={{ color: '#fff', marginTop: '1rem' }}>
        if you can't see the PDF,{' '}
        <a href="/Athul_Resume.pdf" style={{ color: '#4287f5' }}>click here</a> to download.
      </p>
    </PageWrapper>
  );
}

function ContactPage() {
  return (
    <PageWrapper>
      <p style={{ color: '#4287f5' }}>email: athul@berkeley.edu</p>
    </PageWrapper>
  );
}

//
// 7) The main App with the route definitions
//
function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          {/* Main pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Dedicated project detail pages */}
          <Route path="/projects/hardware/1" element={<HardwareProjectDetail1 />} />
          <Route path="/projects/hardware/2" element={<HardwareProjectDetail2 />} />
          <Route path="/projects/software/1" element={<SoftwareProjectDetail1 />} />
          <Route path="/projects/software/2" element={<SoftwareProjectDetail2 />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

//
// 8) Root component
//
export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}