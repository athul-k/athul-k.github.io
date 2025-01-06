import React, { memo } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from 'react-starfield';
import { TypeAnimation } from 'react-type-animation'
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
          color: '#006dcc',
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
          color: '#006dcc',
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
          color: '#006dcc',
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
          color: '#006dcc',
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
          color: '#006dcc',
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
      /* Remove position: 'absolute' so the page scrolls normally */
      /* Let content fill the screen's height and expand if needed */
      minHeight: '100vh',
      /* Push content down ~60px or more so it’s below the fixed navbar */
      paddingTop: '80px',
      /* Box-sizing ensures padding doesn’t cause weird overflow */
      boxSizing: 'border-box',
      /* Centering content if desired */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      /* If you want top alignment instead, remove justifyContent: 'center' */
      justifyContent: 'flex-start',
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
      <TypeAnimation
      sequence={[
        'hi! i\'m athul.', 
        2000, 
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={false}
      repeat={0}
      style={{color: '#fff', fontSize: '2em', display: 'inline-block', textAlign: 'center'}}
    />
      {/* <p style={{ color: '#fff', margin: '1rem', textAlign: 'center' }}>
        i really hope this works lmao
      </p> */}
    <TypeAnimation
      sequence={[
        2000,
        'i\'m a junior at uc berkeley (meche & eecs).',
        2000, // Waits 2s
        'i like controls, optimization, and robotics.', 
        2000, 
        'i like research oriented positions.',  
        2000, 
        'please recruit me :)',
        2000,
        'contact me about anything you see here!',
        30000,
        'now, time for some fun facts.',
        5000,
        'i love typing in lowercase.',
        5000,
        'pad kee mao is my favorite food.',
        5000,
        'my favorite soccer team is barcelona.',
        5000,
        'my sleep schedule has a mind of its own.',
        5000,
        'i like chocolate chip cookies a lot,',
        1000,
        'my girlfriend and i bake them often.',
        5000,
        'i also really love cats, and want to get my own sometime!',
        5000,
        'i think i\'ll let this start from the top now.',
        1000, 
        'thanks for listening!',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{color: '#006dcc', fontSize: '1em', display: 'inline-block', textAlign: 'center'}}
    />
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <p style={{ color: '#006dcc' }}>more stuff about me</p>
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
      <div style={{ width: '80%', margin: '2rem auto', color: '#fff'}}>
        <h1 style={{ color: '#006dcc', marginBottom: '1.5rem' }}>projects</h1>

        {/* Hardware Section */}
        <h2 style={{ borderBottom: '2px solid #006dcc' }}>hardware</h2>
        <div style={{ display: 'flex', margin: '2rem 0' }}>
          <img
            src="/hardware_project1.jpg"
            alt="Hardware Project 1"
            style={{ width: '40%', marginRight: '1rem' }}
          />
          <div style={{ flex: 1 }}>
            <h3>
            <a href="https://www.youtube.com/watch?v=KUTON_LL8Ps" style={{ color: '#006dcc' }}>rubik's cube solver!</a>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              my friends and i made a rubik's cube solver in high school, for our AP Physics C capstone project. it can solve a rubik's cube in about 3 seconds. click the heading to see a walkthrough of it.
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
                style={{ color: '#006dcc', textDecoration: 'none' }}
              >
                fsae ev (formula electric car) suspension system
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              i designed, validated, and made drawings for the uprights of Formula Electric @ Berkeley's FSAE car. (SN3). 
              i was also the {' '}
              <span style={{ color: '#aaaaaa' }}>dynamics (steering & suspension)</span>{' '}lead the following semester, leading the subteam through the design cycle, developing and validating 
              our new 3-element suspension system, and overhauling our FEA processes.
            </p>
          </div>
        </div>

        {/* Software Section */}
        <h2 style={{ borderBottom: '2px solid #006dcc', marginTop: '3rem' }}>software</h2>
        <h4 style={{ marginTop: '-1rem' }}>note: for class projects, i am not allowed to link my code on this website. email me and i can send it to you privately, <span style={{ color: '#aaaaaa' }}>if and only if you are interested in employing me</span>{''}. no code for other cal students, sorry!</h4>
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
                style={{ color: '#006dcc', textDecoration: 'none' }}
              >
                pacbot
                <div style={{marginTop: '-1rem'}}> <h5><span style={{ color: '#5eb4ff' }}>language: <span style={{ color: '#aaaaaa'}}>python</span>{' '} libraries: <span style={{ color: '#aaaaaa' }}>WIP, update soon</span>{''}</span>{''}</h5></div>
              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              for our class  {' '}
              <span style={{ color: '#aaaaaa' }}>CS188 (Artificial Intelligence)</span>{''}, a friend and i made an autonomous pacman player, running on SLAM and policy optimization.
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
                style={{ color: '#006dcc', textDecoration: 'none' }}
              >
                2d game (i'll update this title lol)
                <div style={{marginTop: '-1rem'}}> <h5><span style={{ color: '#5eb4ff' }}>language: <span style={{ color: '#aaaaaa'}}>java</span>{' '} libraries: <span style={{ color: '#aaaaaa' }}>TETile, TERenderer</span>{''}</span>{''}</h5></div>
                </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              for our class {' '}
              <span style={{ color: '#aaaaaa' }}>CS61B (Data Structures & Algorithms)</span>{''}, a friend and i made a fun 2D horror game, with randomized world generation, dynamic lighting and an AI enemy. the ai enemy was optimal, running on BFS, and the world generation utilized an underlying quick-union structure.
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
                to="/projects/software/3"
                style={{ color: '#006dcc', textDecoration: 'none' }}
              >
                TSP (traveling salesperson) approximation algorithm
                <div style={{marginTop: '-1rem'}}> <h5><span style={{ color: '#5eb4ff' }}>language: <span style={{ color: '#aaaaaa'}}>python</span>{' '} libraries: <span style={{ color: '#aaaaaa' }}>networkx, numba, cython</span>{''}</span>{''}</h5></div>

              </Link>
            </h3>
            <p style={{ lineHeight: '1.5' }}>
              as part of an optional competition for my class {' '}
              <span style={{ color: '#aaaaaa' }}>CS170 (Efficient Algorithms & Intractable Problems)</span>{''}, i made an approximation algorithm for the traveling salesperson problem. it builds on christofides' 3/2-approximation algorithm,
               using an optimized number of 3-opt and 2-opt iterations with random restarts to find a close to optimal solution (approx 5/4 on average).{' '}<span style={{ color: '#aaaaaa' }}>it ranked #1/121 submissions.</span>{''}
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
      <h2 style={{ color: '#006dcc', marginBottom: '1rem' }}>
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
      <h2 style={{ color: '#006dcc', marginBottom: '1rem' }}>
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
      <h2 style={{ color: '#006dcc', marginBottom: '1rem' }}>
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
      <h2 style={{ color: '#006dcc', marginBottom: '1rem' }}>
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

function SoftwareProjectDetail3() {
  return (
    <PageWrapper>
      <h2 style={{ color: '#006dcc', marginBottom: '1rem' }}>
        Software Project 2
      </h2>
      <img
        src="/software_project3.jpg"
        alt="Software Project 3"
        style={{ width: '60%', margin: '1rem' }}
      />
      <p style={{ color: '#fff', maxWidth: '600px', lineHeight: '1.6' }}>
        Detailed info on software project 3. 
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
      <h2 style={{ color: '#006dcc', marginBottom: '1rem' }}>resume</h2>
      <iframe
        src="/Athul_Resume.pdf"
        title="resume"
        style={{
          width: '80%',
          height: '60%',
          border: '2px solid #006dcc',
        }}
      />
      <p style={{ color: '#fff', marginTop: '1rem' }}>
        if you can't see the PDF,{' '}
        <a href="/Athul_Resume.pdf" style={{ color: '#006dcc' }}>click here</a> to download.
      </p>
    </PageWrapper>
  );
}

function ContactPage() {
  return (
    <PageWrapper>
      <p style={{ color: '#006dcc' }}>email: athul@berkeley.edu</p>
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
          <Route path="/projects/software/3" element={<SoftwareProjectDetail3 />} />

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