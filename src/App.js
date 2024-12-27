import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from 'react-starfield';

// -- Shared style for Starfield --
const starfieldStyle = {
  position: 'fixed', // Use fixed to keep it static during transitions
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0, // Always behind content
};

function Navbar() {
  return (
    <nav
      style={{
        position: 'relative',
        zIndex: 2, // Above the starfield but below transitions
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <a
        href="#/"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        home
      </a>
      <a
        href="#/about"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        about
      </a>
      <a
        href="#/projects"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        projects
      </a>
      <a
        href="#/contact"
        style={{
          color: '#4287f5',
          margin: '0 1rem',
          textDecoration: 'none',
          fontSize: '1.2rem',
        }}
      >
        contact
      </a>
    </nav>
  );
}

// Page Wrapper with Two-Way Slide Animation
function PageWrapper({ children }) {
  const pageVariants = {
    initial: { opacity: 0, x: "100vw" }, // Start off-screen (right)
    animate: { opacity: 1, x: 0 },       // Slide in to the center
    exit: { opacity: 0, x: "-100vw" },   // Slide out to the left
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        zIndex: 1, // Above the starfield
        padding: '2rem',
      }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <PageWrapper>
      <h1 style={{ color: '#fff', marginBottom: '2rem' }}>hi!</h1>
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <p style={{ color: '#4287f5' }}>hi. again.</p>
    </PageWrapper>
  );
}

function ProjectsPage() {
  return (
    <PageWrapper>
      <p style={{ color: '#4287f5' }}>soon!</p>
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

function App() {
  const location = useLocation();

  return (
    <>
      {/* Static Starfield */}
      <Starfield
        style={starfieldStyle}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      {/* Navbar */}
      <Navbar />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}