import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from 'react-starfield';

// -- Shared style for Starfield so it's behind content --
const starfieldStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0, // behind other elements
};

function Navbar() {
  return (
    <nav
      style={{
        position: 'relative',
        zIndex: 2, 
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

function PageWrapper({ children }) {
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100vw" },
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
        height: '100vh',
        width: '100%',
        backgroundColor: 'black', // Add this to prevent white flash
      }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <PageWrapper>
      <Starfield
        style={starfieldStyle}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar />
      <div
        style={{
          position: 'relative',
          zIndex: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <h1 style={{ color: '#fff', marginBottom: '2rem' }}>hi!</h1>
      </div>
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <Starfield
        style={starfieldStyle}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1, color: '#4287f5', padding: '2rem' }}>
        <p>hi. again.</p>
      </div>
    </PageWrapper>
  );
}

function ProjectsPage() {
  return (
    <PageWrapper>
      <Starfield
        style={starfieldStyle}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1, color: '#4287f5', padding: '2rem' }}>
        <p>soon!</p>
      </div>
    </PageWrapper>
  );
}

function ContactPage() {
  return (
    <PageWrapper>
      <Starfield
        style={starfieldStyle}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1, color: '#4287f5', padding: '2rem' }}>
        <p>email: athul@berkeley.edu</p>
      </div>
    </PageWrapper>
  );
}

function App() {
  const location = useLocation();

  return (
    // Use AnimatePresence for transitions
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}