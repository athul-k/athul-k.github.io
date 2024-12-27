import React, { memo } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from 'react-starfield';

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
        flex-wrap: wrap;      /* allow wrapping links */
        height: auto;         /* let height expand */
        padding: 0.5rem 0;    /* a bit more padding */
      }

      .navbar-responsive a {
        margin: 0.25rem 1rem; /* smaller margin */
        font-size: 1rem;      /* slightly smaller text */
      }
    }
  `;
  return (
    <nav
    // We'll apply a class name so the media query can target it
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
      // Larger screens: keep everything on one line
      // The media query will override on smaller screens
    }}
  >
    {/* Embed the CSS for mobile inside a <style> tag */}
    <style>{mobileStyles}</style>
    
      {/* Use <Link to="..."> instead of <a href="..."> */}
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

function PageWrapper({ children }) {
  // Two-way slide-out transition
  const pageVariants = {
    initial: { opacity: 0, x: '100vw' }, // Enter from right
    animate: { opacity: 1, x: 0 },       // Center
    exit: { opacity: 0, x: '-100vw' },   // Exit to left
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

function HomePage() {
  return (
    <PageWrapper>
      <h1 style={{ color: '#fff', marginBottom: '1rem' }}>hi! i'm athul.</h1>
      <p style={{ color: '#fff', marginBottom: '1rem' }}>
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

function ProjectsPage() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#4287f5' }}>projects</h2>
      <ul style={{ color: '#fff' }}>
        <li>Project 1: [Add details]</li>
        <li>Project 2: [Add details]</li>
        <li>Project 3: [Add details]</li>
      </ul>
    </PageWrapper>
  );
}

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
        if you can't see the PDF, <a href="/Athul_Resume.pdf" style={{ color: '#4287f5' }}>click here</a> to download.
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

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}