import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Impact Stories', href: '#stories' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container-safe">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ✅ Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo1.png"
              alt="Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover transform hover:scale-110 transition-transform duration-200"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-bold">
                Unity for Helping
              </h1>
              <p className="text-xs opacity-80">Foundation</p>
            </div>
          </div>

          {/* Desktop Navigation (allows horizontal scroll when space is tight) */}
          <nav className="hidden lg:flex items-center space-x-8 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="btn-flat">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} mobile-menu-scroll`} role="dialog" aria-modal="true">
            <div className="h-full overflow-y-auto px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-base font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="mt-6">
                <button className="w-full btn-flat">Donate Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
