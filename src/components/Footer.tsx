import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Programs', href: '#work' },
      { name: 'Impact Stories', href: '#stories' },
      { name: 'Get Involved', href: '#involved' }
    ],
    'Programs': [
      { name: 'Child Education', href: '#work' },
      { name: 'Food Distribution', href: '#work' },
      { name: 'Healthcare', href: '#work' },
      { name: 'Women Empowerment', href: '#work' }
    ],
    'Support': [
      { name: 'Donate Now', href: '#involved' },
      { name: 'Volunteer', href: '#involved' },
      { name: 'Partner With Us', href: '#involved' },
      { name: 'Contact Us', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/share/1AR5gGbkfb/' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'X', url: 'https://x.com/contactus_ufhf?t=uuYCf15-8REgt9eVng5Xsg&s=09' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/unity-for-helping-foundation-a15946380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
  ];

  return (
    <footer className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white site-bg`}>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Unity for Helping</h3>
                <p className="text-sm text-gray-300">Foundation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating lasting change through compassion, education, and community support. 
              Together, we're building a world where everyone has the opportunity to thrive.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">Village Tailpara, P/o- Barla, P/s- Nalhati, Dist-Birbhum</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 867018 8757</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">contactus.ufhf@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup (responsive) */}
        <div className="card p-6 sm:p-8 rounded-md mb-8">
          <div className="text-center mb-4">
            <h4 className="text-xl font-semibold mb-2">Stay Connected</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates on our programs and impact stories.
            </p>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-xl bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <button type="submit" className="btn-flat w-full sm:w-auto">
                 Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-300">
                © 2024 Unity for Helping Foundation. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Registered under Section 8 of Companies Act, 2013
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>80G Tax Exemption</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>FCRA Registered</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% Transparency</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure Donations</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;