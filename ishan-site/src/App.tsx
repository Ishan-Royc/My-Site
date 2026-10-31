import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TopBar from './TopBar'

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Experience = lazy(() => import('./pages/Experience.tsx'));

function App() {
  const [act, setAct] = useState(0);
  const [language, setLanguage] = useState('en');
  return (
    <>
      <Router>
      <nav>
        <TopBar active={act} language={language} changeLanguage={setLanguage}></TopBar>
      </nav>
      <div id="body">
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home setAct={setAct} lang={language} />} />
            <Route path="/About" element={<About setAct={setAct} lang={language} />} />
            <Route path="/Projects" element={<Projects setAct={setAct} />} />
            <Route path="/Experience" element={<Experience setAct={setAct} lang={language} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
    </>
  );
}

export default App;
