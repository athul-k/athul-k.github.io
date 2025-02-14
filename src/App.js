import React, { memo, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ReactNebula } from '@flodlc/nebula';

/* =========================================
   NAVBAR
========================================= */
const Navbar = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const mobileStyles = `
    @media (max-width: 600px) {
      .navbar-responsive {
        flex-wrap: wrap;
        height: auto;
        padding: 0.5rem 0;
      }
      .navbar-responsive a {
        margin: 0.25rem 1rem;
        font-size: 1rem;
      }
    }
  `;

  const hoverEffect = `
    .navbar-link {
      position: relative;
      text-decoration: none;
      color: #725cfa;
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0 1rem;
      display: inline-block;
      transition: color 0.3s ease-in-out;
    }

    .navbar-link::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 2px;
      background-color: #725cfa;
      transition: width 0.3s ease-in-out;
    }

    .navbar-link:hover::after {
      width: 100%; /* Expand underline on hover */
    }

    .navbar-link:hover {
      color: #ad9eff; /* Slightly brighter hover effect */
    }

    .navbar-link.active {
      color: #ad9eff; /* Active link color */
    }

    .navbar-link.active::after {
      width: 100%; /* Underline active link */
    }
  `;

  const handleClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav
      className="navbar-responsive"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <style>{mobileStyles}</style>
      <style>{hoverEffect}</style>
      <span
        onClick={() => handleClick('/')}
        className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        home
      </span>
      <span
        onClick={() => handleClick('/about')}
        className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
      >
        about
      </span>
      <span
        onClick={() => handleClick('/projects')}
        className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
      >
        projects
      </span>
      <span
        onClick={() => handleClick('/resume')}
        className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}
      >
        resume
      </span>
      <span
        onClick={() => handleClick('/contact')}
        className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
      >
        contact
      </span>
      <span
        onClick={() => handleClick('/personal')}
        className={`navbar-link ${location.pathname === '/personal' ? 'active' : ''}`}
      >
        personal
      </span>
    </nav>
  );
});

/* =========================================
   LAYOUT
========================================= */
function Layout({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ReactNebula
          config={{
            starsCount: 900,
            starsColor: '#FFFFFF',
            starsRotationSpeed: 3,
            cometFrequence: 100,
            nebulasIntensity: 10,
            bgColor: 'rgb(0,0,0)',
            sunScale: 0,
            planetsScale: 0,
            solarSystemOrbite: 70,
            solarSystemSpeedOrbit: 100,
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0, // Nebula behind everything
          }}
        />
      </div>
      <Navbar />
      {children}
    </div>
  );
}

/* =========================================
   PAGE WRAPPER
========================================= */
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
        zIndex: 999,
        minHeight: '100vh',
        paddingTop: '80px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   HOME PAGE
========================================= */
function HomePage() {
  return (
    <PageWrapper>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <TypeAnimation
          sequence={[
            "hi! i'm athul.",
            2000,
            () => console.log('First typed sequence done'),
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            color: '#fff',
            fontSize: '2em',
            display: 'inline-block',
            fontWeight: 'bold',
          }}
        />
        <TypeAnimation
          sequence={[
            2000,
            "i'm a junior at uc berkeley (meche & eecs).",
            2000,
            'i like controls, optimization, and robotics.',
            2000,
            'i like research oriented positions.',
            2000,
            'please recruit me :)',
            2000,
            'contact me about anything you see here!',
          ]}
          wrapper="span"
          cursor
          repeat={Infinity}
          style={{
            color: '#ad9eff',
            fontSize: '1em',
            display: 'inline-block',
            marginTop: '1rem',
          }}
        />
      </div>
    </PageWrapper>
  );
}

/* =========================================
   ABOUT PAGE
========================================= */
function AboutPage() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>about me</h2>
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6', textAlign: 'center' }}>
        i'm athul, a third year double major in <span style={{ color: '#ad9eff' }}>mechanical engineering & eecs</span>{''} at <span style={{ color: '#ad9eff' }}>uc berkeley</span>{''}! my career interests lie in researching <span style={{ color: '#ad9eff' }}>controls</span>{''} and <span style={{ color: '#ad9eff' }}>robotics</span>{''}, especially on the <span style={{ color: '#ad9eff' }}>algorithmic</span>{''} side of things. i also consider myself to be proficient in CAD, and i love designing things for fun! outside of school and whatnot, i like sleeping, gaming, going on walks, following soccer, and cats.
      </p>
    </PageWrapper>
  );
}

/* =========================================
   PROJECTS PAGE
========================================= */
function ProjectsPage() {
  return (
    <PageWrapper>
      <div style={{ width: '80%', margin: '2rem auto', color: '#fff' }}>
        <h1 style={{ color: '#725cfa', marginBottom: '1.5rem' }}>projects (website is WIP, here is a link to a  <a href="tinyurl.com/athul-portfolio" style={{ color: '#725cfa' }}>
               pdf portfolio.
              </a>)</h1>
        {/* fullstack section */}
        <h2 style={{ borderBottom: '2px solid #725cfa' }}>fullstack (mechanical and software)</h2>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/hardware_project2.jpg"
            alt="Hardware Project 2"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/fullstack/selfdriving"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                self driving rc car (IP)
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            i'm making my own self driving RC car, complete with 4WD, torque vectoring, active suspension, and more! the plan is to optimize it for both dynamic maneuvers and speed,
            rather than pure straight-line speed or pure skidpad. i'm currently having a lot of fun with this project, and i am excited to see how far i can take it. the end product should be able to learn, map, and navigate a path of cones autonomously at blazingly fast speeds! 
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
                to="/projects/fullstack/gifts"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                gifts :)
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            i occasionally make gifts for my girlfriend and other friends!
            </p>
          </div>
        </div>

        {/* Hardware Section */}
        <h2 style={{ borderBottom: '2px solid #725cfa' }}>hardware</h2>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/hardware_project2.jpg"
            alt="Hardware Project 2"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/hardware/formulaelectric"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                fsae ev (formula electric car) suspension system
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            i designed, validated, and made drawings for the uprights of Formula Electric @ Berkeley's FSAE car. (SN3). 
              i was also the {' '}
              <span style={{ color: '#ad9eff' }}>dynamics (steering & suspension)</span>{' '}lead the following semester, 
              leading the subteam through the design cycle, developing and validating 
              our new 3-element suspension system, and overhauling our FEA processes.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/hardware_project1.jpg"
            alt="Hardware Project 1"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <a href="https://www.youtube.com/watch?v=KUTON_LL8Ps" style={{ color: '#725cfa' }}>
                rubik's cube solver!
              </a>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            my friends and i made a rubik's cube solver in high school, for our AP Physics C capstone project. 
            it can solve a rubik's cube in about 3 seconds. click the heading to see a walkthrough of it.
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
                to="/projects/hardware/cadathon"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                cadathon robots
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            in high school, i took part in robot design competitions (dubbed CADathons), where we would design incredibly mechanically complicated robots packed with features to optimize for a specific set of tasks. these would typically take place over the course of 5-7 days, and i took part in and won several of them.
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
                to="/projects/hardware/first"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                FTC/FRC
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            in high school, i participated in the FIRST Robotics Competition (8404), and FIRST Tech Challenge (9614, 18219, 7591). I was the mechanical lead on FTC 9614, the CAD lead on FTC 18219, and the team captain of FTC 7591. As part of FTC 18219, we won the international Maryland Tech Invitational Competition in 2021. 
            </p>
          </div>
        </div>

        {/* Software Section */}
        <h2 style={{ borderBottom: '2px solid #725cfa', marginTop: '3rem' }}>software/ee</h2>
        <h4 style={{ marginTop: '-1rem' }}>
          note: for class projects, code is private. email me for more details if you’re hiring.
        </h4>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/software_project1.jpg"
            alt="Software Project 1"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                this website
                <div style={{ marginTop: '-1rem' }}>
                  <h5>
                    <span style={{ color: '#ad9eff' }}>
                      language: <span style={{ color: '#ffffff' }}>javascript, css, html</span>{' '}
                      libraries: <span style={{ color: '#ffffff' }}>react, framer</span>
                    </span>
                  </h5>
                </div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            i coded this website in react, from scratch.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/software_project1.jpg"
            alt="Software Project 1"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/software/pacbot"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                pacbot
                <div style={{ marginTop: '-1rem' }}>
                  <h5>
                    <span style={{ color: '#ad9eff' }}>
                      language: <span style={{ color: '#ffffff' }}>python</span>{' '}
                      libraries: <span style={{ color: '#ffffff' }}>WIP</span>
                    </span>
                  </h5>
                </div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            for our class  {' '}
            <span style={{ color: '#ad9eff' }}>CS188 (Artificial Intelligence)</span>{''}, 
            a friend and i made an autonomous pacman player, running on SLAM and policy optimization.
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
                to="/projects/software/byow"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                2d game
                <div style={{ marginTop: '-1rem' }}>
                  <h5>
                    <span style={{ color: '#ad9eff' }}>
                      language: <span style={{ color: '#ffffff' }}>java</span>{' '}
                      libraries: <span style={{ color: '#ffffff' }}>TETile, etc.</span>
                    </span>
                  </h5>
                </div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            for our class {' '}
            <span style={{ color: '#ad9eff' }}>CS61B (Data Structures & Algorithms)</span>{''}, a friend and i made a fun 2D horror game, 
            with randomized world generation, dynamic lighting and an AI enemy. the ai enemy was optimal, running on BFS, 
            and the world generation utilized an underlying quick-union structure.
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
                to="/projects/software/cpu"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                logisim CPU
                <div style={{ marginTop: '-1rem' }}>
                  <h5>
                    <span style={{ color: '#ad9eff' }}>
                      language: <span style={{ color: '#ffffff' }}>logisim</span>{' '}
                      libraries: <span style={{ color: '#ffffff' }}>n/a</span>
                    </span>
                  </h5>
                </div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            for our class {' '}
            <span style={{ color: '#ad9eff' }}>CS61C (Computer Architecture)</span>{''}, a friend and i made a fully working CPU in Logisim, complete with pipelining and hazard protection.
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/software_project3.jpg"
            alt="Software Project 3"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/software/tspalgo"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                TSP (traveling salesperson) approximation algorithm
                <div style={{ marginTop: '-1rem' }}>
                  <h5>
                    <span style={{ color: '#ad9eff' }}>
                      language: <span style={{ color: '#ffffff' }}>python</span>{' '}
                      libraries: <span style={{ color: '#ffffff' }}>networkx, numba</span>
                    </span>
                  </h5>
                </div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
               as part of an optional competition for my class {' '}
               <span style={{ color: '#ad9eff' }}>CS170 (Efficient Algorithms & Intractable Problems)</span>{''}, 
               i made an approximation algorithm for the traveling salesperson problem. it builds on christofides' 3/2-approximation algorithm,
               using an optimized number of 3-opt and 2-opt iterations with random restarts to find a close to optimal solution 
               (approx 5/4 on average).{' '}<span style={{ color: '#ad9eff' }}>it ranked #1/121 submissions.</span>{''}           
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/software_project4.jpg"
            alt="Software Project 4"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
              <Link
                to="/projects/software/voicecar"
                style={{ color: '#725cfa', textDecoration: 'none' }}
              >
                voice-controlled car
                <div style={{ marginTop: '-1rem' }}>
                  <h5>
                    <span style={{ color: '#ad9eff' }}>
                      language: <span style={{ color: '#ffffff' }}>C (Arduino)</span>{' '}
                      libraries: <span style={{ color: '#ffffff' }}>N/A</span>
                    </span>
                  </h5>
                </div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
            for our class {' '}
            <span style={{ color: '#ad9eff' }}>EECS 16B (Designing Information Systems & Devices II)</span>{''}, a friend and i made a simple 2WD car 
            with closed loop feedback control over its motion as well as voice recognition commands based on a simple PCA clustering algorithm! its internal circuitry
            is made of breadboarded components, including bandpass filters for voice denoising, and voltage regulators for powering the arduino & motors. the whole thing runs on an Arduino Leonardo!
            for a more advanced version of this project, see my ongoing <Link
                to="/projects/software/selfdriving"
                style={{ color: '#ad9eff', textDecoration: 'none' }}>
                self driving rc car project.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

/* =========================================
   HARDWARE PROJECT DETAIL PAGES
========================================= */
function Cadathonbots() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        n/a
      </h2>
      <img
        src="/hardware_project1.jpg"
        alt="Hardware Project 1"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        brrr
      </p>
    </PageWrapper>
  );
}

function Formulaelectric() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        fsae ev car
      </h2>
      <img
        src="/hardware_project2.jpg"
        alt="Hardware Project 2"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        suspension go boing
      </p>
    </PageWrapper>
  );
}

/* =========================================
   SOFTWARE PROJECT DETAIL PAGES
========================================= */
function Pacbot() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        pacbot - CS188
      </h2>
      <img
        src="/software_project1.jpg"
        alt="Software Project 1"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        tbd
      </p>
    </PageWrapper>
  );
}

function Byow() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        BYOW - CS61B
      </h2>
      <img
        src="/software_project2.jpg"
        alt="Software Project 2"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

function Tspalgo() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        tsp approximation algorithm - CS170
      </h2>
      <img
        src="/software_project3.jpg"
        alt="Software Project 3"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

function Voicecar() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        voice automated car - EECS16B
      </h2>
      <img
        src="/software_project4.jpg"
        alt="Software Project 4"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

function Selfdriving() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        self driving car
      </h2>
      <img
        src="/software_project4.jpg"
        alt="Software Project 4"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

function Gifts() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        gifts
      </h2>
      <img
        src="/software_project4.jpg"
        alt="Software Project 4"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

function Cpu() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        cpu
      </h2>
      <img
        src="/software_project4.jpg"
        alt="Software Project 4"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

function First() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        ftc/frc
      </h2>
      <img
        src="/software_project4.jpg"
        alt="Software Project 4"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}
function Personal() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>
        personal designs
      </h2>
      <img
        src="/software_project4.jpg"
        alt="Software Project 4"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
      tbd
      </p>
    </PageWrapper>
  );
}

// Utility to convert hex color to RGB object
const hexToRgb = (hex) => {
  // Remove the hash if present
  hex = hex.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

// Utility to convert RGB to hex (if needed)
const rgbToHex = (r, g, b) =>
  "#" +
  ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase();

function PersonalPage() {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [signalStatus, setSignalStatus] = useState('');
  // We'll keep one state for the color in hex format.
  const [color, setColor] = useState('#000000');

  const correctPassword = "secret"; // Change this to your desired password

  // On component mount, load the saved color from localStorage.
  useEffect(() => {
    const storedColor = localStorage.getItem('color') || '#000000';
    setColor(storedColor);
    const { r, g, b } = hexToRgb(storedColor);
    sendRgbValues(r, g, b);
  }, []);

  // Function to send a simple signal to the ESP32.
  const handleEspSignal = async () => {
    try {
      // Replace with your actual ESP32 endpoint
      const response = await fetch('http://172.16.0.74/signal', {
        method: 'GET',
      });
      if (response.ok) {
        setSignalStatus("Signal sent successfully!");
      } else {
        setSignalStatus("Failed to send signal.");
      }
    } catch (error) {
      console.error("Error sending signal:", error);
      setSignalStatus("i think it worked?");
    }
  };

  // Function to send RGB values to the ESP32.
  const sendRgbValues = async (r, g, b) => {
    try {
      // Replace with your actual ESP32 endpoint and adjust query parameters as needed.
      await fetch(`http://172.16.0.74/rgb?r=${r}&g=${g}&b=${b}`, {
        method: 'GET',
      });
    } catch (error) {
      console.error('Error sending RGB values:', error);
    }
  };

  // Handler for color change from the color picker
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    localStorage.setItem('color', newColor);
    const { r, g, b } = hexToRgb(newColor);
    sendRgbValues(r, g, b);
  };

  // Handle the password form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  // Common styles for inputs and buttons
  const inputStyle = {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '2px solid #725cfa', // purple outline
    backgroundColor: 'transparent', // clear background
    color: '#fff',
    borderRadius: '4px',
    outline: 'none',
    fontFamily: 'inherit',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    marginLeft: '0.5rem',
    border: '2px solid #725cfa', // purple outline
    backgroundColor: 'transparent', // clear background
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  };

  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>personal</h2>
      {authenticated ? (
        <div style={{ color: '#fff' }}>
          {/* Your personal content */}
          <p>lights go fwoom.</p>
          {signalStatus && (
            <p style={{ marginTop: '1rem', color: '#725cfa' }}>{signalStatus}</p>
          )}

          {/* Visual Color Picker */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: '#725cfa' }}>click box for rgb control!</h3>
            <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                style={{
                  width: '50px',
                  height: '50px',
                  border: '2px solid #725cfa',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              />
              <span style={{ marginLeft: '1rem' }}>{color}</span>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Enter password"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            submit
          </button>
        </form>
      )}
    </PageWrapper>
  );
}

/* =========================================
   RESUME PAGE
========================================= */
function ResumePage() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>resume</h2>
      <iframe
        src="/AthulK_Resume_Jan9.pdf"
        title="resume"
        style={{
          width: '80%',
          height: '600px',
          border: '2px solid #725cfa',
        }}
      />
      <p style={{ color: '#fff', marginTop: '1rem' }}>
        If you can’t see the PDF,{' '}
        <a href="/AthulK_Resume_Jan9.pdf" style={{ color: '#725cfa' }}>
          click here
        </a>{' '}
        to download.
      </p>
    </PageWrapper>
  );
}

/* =========================================
   CONTACT PAGE
========================================= */
function ContactPage() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#725cfa', marginBottom: '1rem' }}>contact</h2>
      <p style={{ color: '#fff' }}>
        email me: <span style={{ color: '#725cfa' }}>athul [at] berkeley [dot] edu</span>
      </p>
    </PageWrapper>
  );
}

/* =========================================
   MAIN APP / ROUTES
========================================= */
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
          <Route path="/personal" element={<PersonalPage />} />

          {/* Mechanical Project Detail Pages */}
          <Route path="/projects/hardware/formulaelectric" element={<Formulaelectric />} />
          <Route path="/projects/hardware/cadathon" element={<Cadathonbots />} />
          <Route path="/projects/hardware/personal" element={<Personal />} />
          <Route path="/projects/hardware/first" element={<First />} />

          {/* Software/EE Project Detail Pages */}
          <Route path="/projects/software/pacbot" element={<Pacbot />} />
          <Route path="/projects/software/byow" element={<Byow />} />
          <Route path="/projects/software/cpu" element={<Cpu />} />
          <Route path="/projects/software/tspalgo" element={<Tspalgo />} />
          <Route path="/projects/software/voicecar" element={<Voicecar />} />

          {/* Fullstack Project Detail Pages */}
          <Route path="/projects/fullstack/selfdriving" element={<Selfdriving />} />
          <Route path="/projects/fullstack/gifts" element={<Gifts />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

/* =========================================
   ROOT (EXPORT)
========================================= */
export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}