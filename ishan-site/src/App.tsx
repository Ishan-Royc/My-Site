import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import TopBar from './TopBar'

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));

function App() {
  const [act, setAct] = useState(0);
  const [language, setLanguage] = useState('en');
  return (
    <>
      <Router>
      <nav>
        <TopBar active={act} language={language} changeLanguage={setLanguage}></TopBar>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home setAct={setAct} lang={language} />} />
          <Route path="/About" element={<About setAct={setAct} />} />
          <Route path="/Projects" element={<Projects setAct={setAct} />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
