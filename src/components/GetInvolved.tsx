import React, { useState } from 'react';
import { Heart, Users, DollarSign, Handshake, Mail, Phone, MapPin, Send } from 'lucide-react';

interface GetInvolvedProps {
  darkMode: boolean;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const tabs = [
    { id: 'volunteer', label: 'Volunteer', icon: Users },
    { id: 'donate', label: 'Donate', icon: DollarSign },
    { id: 'partner', label: 'Partner', icon: Handshake }
  ];

  const volunteerOpportunities = [
    {
      title: 'Education Volunteer',
      description: 'Teach children, help with homework, or organize educational activities.',
      commitment: '4-6 hours/week',
      skills: 'Teaching, patience, creativity'
    },
    {
      title: 'Food Distribution',
      description: 'Help prepare and distribute meals to families in need.',
      commitment: '2-4 hours/week',
      skills: 'Physical fitness, teamwork'
    },
    {
      title: 'Healthcare Support',
      description: 'Assist in medical camps, health awareness programs.',
      commitment: '6-8 hours/month',
      skills: 'Medical background preferred'
    },
    {
      title: 'Community Outreach',
      description: 'Organize events, spread awareness, engage with communities.',
      commitment: 'Flexible',
      skills: 'Communication, organization'
    }
  ];

  const donationOptions = [
    { amount: 500, impact: 'Provides school supplies for 1 child for a month' },
    { amount: 1000, impact: 'Feeds a family of 4 for a week' },
    { amount: 2500, impact: 'Sponsors a child\'s education for 3 months' },
    { amount: 5000, impact: 'Funds a medical camp for 50 people' }
  ];

  return (
    <section id="involved" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-orange-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              Get Involved
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Join Our Mission of{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Compassion
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            There are many ways to make a difference. Whether you have time, resources, or expertise to share, 
            we have opportunities that match your passion and availability.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`flex rounded-full p-1 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'volunteer' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Volunteer Opportunities
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Join our team of dedicated volunteers and make a direct impact in your community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="card p-6 rounded-md">
                    <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {opportunity.title}
                    </h4>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {opportunity.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className={`font-medium mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Time Commitment:
                        </span>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {opportunity.commitment}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className={`font-medium mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Skills Needed:
                        </span>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {opportunity.skills}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Volunteer Form */}
              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg`}>
                <h4 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Volunteer Registration
                </h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                    />
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    >
                      <option value="">Select Interest Area</option>
                      <option value="education">Education</option>
                      <option value="food">Food Distribution</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="community">Community Outreach</option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us about yourself and why you want to volunteer..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'donate' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Make a Donation
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your contribution directly impacts lives. Every rupee counts towards building a better future.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {donationOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer ${
                      darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
                    } shadow-lg hover:shadow-xl`}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">
                        ₹{option.amount.toLocaleString()}
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {option.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg`}>
                <div className="text-center mb-6">
                  <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Custom Donation Amount
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Enter any amount you'd like to contribute
                  </p>
                </div>
                <div className="max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <span className={`text-2xl font-bold mr-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>₹</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className={`flex-1 text-2xl font-bold px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Donate Now
                  </button>
                  <p className={`text-xs text-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    🔒 Secure payment • Tax deductible • 100% goes to programs
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'partner' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Partnership Opportunities
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Join hands with us to create larger impact through corporate partnerships and collaborations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: 'Corporate CSR',
                    description: 'Partner with us for your CSR initiatives and create meaningful impact.',
                    benefits: ['Tax benefits', 'Brand visibility', 'Employee engagement']
                  },
                  {
                    title: 'School Partnerships',
                    description: 'Educational institutions can collaborate for student volunteer programs.',
                    benefits: ['Student development', 'Community service', 'Social awareness']
                  },
                  {
                    title: 'Event Sponsorship',
                    description: 'Sponsor our events and campaigns to reach wider audiences.',
                    benefits: ['Brand exposure', 'Networking', 'Social impact']
                  }
                ].map((partnership, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
                    } shadow-lg hover:shadow-xl`}
                  >
                    <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {partnership.title}
                    </h4>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {partnership.description}
                    </p>
                    <ul className="space-y-1">
                      {partnership.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg`}>
                <h4 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Partnership Inquiry
                </h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Organization Name"
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Contact Person"
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    />
                    <select
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      required
                    >
                      <option value="">Partnership Type</option>
                      <option value="csr">Corporate CSR</option>
                      <option value="school">School Partnership</option>
                      <option value="sponsor">Event Sponsorship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Tell us about your organization and partnership interests..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Partnership Inquiry</span>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;