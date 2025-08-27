import React from 'react';
import { GraduationCap, Utensils, Stethoscope, Users, Home, ArrowRight } from 'lucide-react';

interface OurWorkProps {
  darkMode: boolean;
}

const OurWork: React.FC<OurWorkProps> = ({ darkMode }) => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Child Education',
      subtitle: 'Building Bright Futures',
      description: 'Providing free schooling, books, and uniforms to underprivileged children.',
      example: 'In 2024 alone, we enrolled 2,000 children from slums into formal education.',
      image: 'https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: '20+ Children Enrolled',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Utensils,
      title: 'Food Distribution',
      subtitle: 'Nourishing Communities',
      description: 'Free meals for children and families in need across rural and urban areas.',
      example: 'Our "Meal for Every Child" program serves hot lunches daily to 800 children in rural schools.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: '50+ Meals Served',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      subtitle: 'Healing with Compassion',
      description: 'Free medical camps, medicines, and awareness programs in remote villages.',
      example: 'In the last year, we conducted 60 free medical camps in remote villages, helping 10,000+ people.',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: '10+ Medical Camps',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      subtitle: 'Empowering Through Skills',
      description: 'Skill training in tailoring, crafts, and small businesses for sustainable livelihoods.',
      example: 'Over 500 women have started micro-businesses after our free skill workshops.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: '50+ Women Empowered',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Home,
      title: 'Community Relief',
      subtitle: 'Building Resilient Communities',
      description: 'Disaster relief, clean water drives, and shelter building for vulnerable communities.',
      example: 'During recent floods, we provided emergency relief kits to 3,000 families.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: '30+ Families Helped',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="work" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-orange-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              Our Programs
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Transforming Lives Through{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Comprehensive Care
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Our multi-faceted approach addresses the root causes of poverty while providing immediate relief 
            to those who need it most.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article key={index} className={`card ${darkMode ? '': ''}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${program.color}`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl lg:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{program.title}</h3>
                        <p className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>{program.subtitle}</p>
                      </div>
                    </div>
                    <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{program.description}</p>
                    <div className={`p-4 rounded-md mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l-4 border-orange-500`}>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Success Story</p>
                      <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{program.example}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className={`text-lg font-semibold ${program.color} bg-clip-text text-transparent`}>{program.stats}</div>
                      <button className="text-orange-500 hover:text-orange-600 flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img src={program.image} alt={program.title} className="w-full h-64 lg:h-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 opacity-10" />
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 shadow-subtle">
                      <span className="text-sm font-medium text-gray-900">{program.stats}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`p-8 lg:p-12 rounded-3xl ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          } shadow-lg`}>
            <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Make a Difference?
            </h3>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Join us in our mission to transform lives. Whether through donations, volunteering, 
              or spreading awareness, every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Support Our Programs
              </button>
              <button className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400' 
                  : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600'
              }`}>
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;