import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      {/* Home Link */}
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
      {/* About Link */}
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

      {/* Projects Link */}
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

      {/* Contact Link */}
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
}

function HomePage() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Starfield
        style={starfieldStyle}
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Page Content */}
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
        <div>
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
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
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
    </div>
  );
}

function ProjectsPage() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
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
    </div>
  );
}

function ContactPage() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
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
    </div>
  );
}

function App() {
  return (
    // Use HashRouter so routes work on GitHub Pages without additional config
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;