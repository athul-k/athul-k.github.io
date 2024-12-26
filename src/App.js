import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Starfield from 'react-starfield';


// Example "pages" to show routing
function HomePage() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Starfield
        starCount={100000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Content on top of the particles */}
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
        <h1 style={{ color: '#fff', marginBottom: '2rem' }}>
          hi!
        </h1>
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

// Additional pages (just placeholders for demonstration)
function AboutPage() {
  return (
  <>
    <Starfield
      starCount={100000}
      starColor={[255, 255, 255]}
      speedFactor={0.05}
      backgroundColor="black"
    />
    <h2 style={{ color: '#fff' }}>about</h2>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
    <Starfield
      starCount={100000}
      starColor={[255, 255, 255]}
      speedFactor={0.05}
      backgroundColor="black"
    />
    <h2 style={{ color: '#fff' }}>projects</h2>
    </>
  );
}

function ContactPage() {
  return (
  <>
  <Starfield
    starCount={100000}
    starColor={[255, 255, 255]}
    speedFactor={0.05}
    backgroundColor="black"
  />
  <h2 style={{ color: '#fff' }}>contact</h2>
  </>
);
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the other pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;