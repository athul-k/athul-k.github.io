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
  zIndex: 0,         // behind other elements
};

function HomePage() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Starfield
        style={starfieldStyle}
        starCount={100000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Content on top of the Starfield */}
      <div
        style={{
          position: 'relative',
          zIndex: 1, // ensure content is in front
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
            About
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
            Projects
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
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Starfield
        style={starfieldStyle}
        starCount={100000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
        <h2>about</h2>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Starfield
        style={starfieldStyle}
        starCount={100000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
        <h2>projects</h2>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Starfield
        style={starfieldStyle}
        starCount={100000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
        <h2>contact</h2>
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