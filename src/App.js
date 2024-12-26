import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { OrbitSpace } from 'orbit-space';

// Example "pages" to show routing
function HomePage() {
  return (
    
  <OrbitSpace>
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
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
    </OrbitSpace>
  );
}

// Additional pages (just placeholders for demonstration)
function AboutPage() {
  return <h2 style={{ color: '#fff' }}>About Page</h2>;
}

function ProjectsPage() {
  return <h2 style={{ color: '#fff' }}>Projects Page</h2>;
}

function ContactPage() {
  return <h2 style={{ color: '#fff' }}>Contact Page</h2>;
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