import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactCounter from './components/ImpactCounter';
import QuickStory from './components/QuickStory';
import About from './components/About';
import OurWork from './components/OurWork';
import ImpactStories from './components/ImpactStories';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Save theme preference and apply to document
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <ImpactCounter darkMode={darkMode} />
        <QuickStory darkMode={darkMode} />
        <About darkMode={darkMode} />
        <OurWork darkMode={darkMode} />
        <ImpactStories darkMode={darkMode} />
        <GetInvolved darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;