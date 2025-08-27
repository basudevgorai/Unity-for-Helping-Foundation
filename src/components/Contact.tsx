import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin, Clock, Users } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      details: ['Unity for Helping Foundation', 'Village Tailpara, P/o- Barla', 'P/s- Nalhati, Dist-Birbhum'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 86701 88757', '+91 79081 62369'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['contactus.ufhf@gmail.com'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/share/1AR5gGbkfb/', color: 'hover:text-blue-500' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, name: 'X', url: 'https://x.com/contactus_ufhf?t=uuYCf15-8REgt9eVng5Xsg&s=09', color: 'hover:text-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/unity-for-helping-foundation-a15946380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-600' }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4">
            <Mail className="w-4 h-4 text-orange-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              Contact Us
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work Together for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Change
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Have questions about our programs? Want to get involved? Need support? 
            We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Follow Our Journey
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } ${social.color}`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className={`text-sm mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Stay updated with our latest activities and impact stories.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`card p-8 lg:p-12 rounded-md`}>
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send Us a Message
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-orange-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-orange-500'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="program">Program Information</option>
                    <option value="support">General Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                    placeholder="Tell us how we can help you or how you'd like to get involved..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className={`card p-8 rounded-md`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Visit Our Office
            </h3>
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <p className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Interactive Map Coming Soon
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    123 Compassion Street, Hope District, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;