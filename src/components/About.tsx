import React from 'react';
import { Target, Eye, BookOpen, Users, Heart, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every action we take is driven by genuine care and empathy for those in need.'
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'We believe in the power of community and working together to create lasting change.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs and services.'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Knowledge is the foundation of empowerment and breaking cycles of poverty.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-orange-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              About Us
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Building Hope, Creating{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Lasting Change
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Unity for Helping Foundation is more than an organization – we're a movement of compassionate 
            individuals dedicated to transforming lives and communities.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className={`card p-8`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Mission
              </h3>
            </div>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our mission is to create a world where no child goes to bed hungry, where education 
              is accessible to every child, and where communities can thrive with dignity. We work 
              tirelessly to break the cycle of poverty through sustainable programs that address 
              immediate needs while building long-term solutions.
            </p>
          </div>

          {/* Vision */}
          <div className={`card p-8`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Vision
              </h3>
            </div>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A society where poverty is replaced with opportunity, and compassion leads the way. 
              We envision thriving communities where every individual has access to education, 
              healthcare, and the resources needed to build a better future for themselves and 
              their families.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className={`card p-8 lg:p-12 mb-16`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-2xl lg:text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Story
              </h3>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  It all started with a small food distribution drive in 2015, when our founders saw 
                  children going hungry on the streets. What began as a simple act of kindness has 
                  grown into something much larger.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  From that one act of compassion, Unity for Helping Foundation has grown into a 
                  network of volunteers, teachers, doctors, and social workers dedicated to making 
                  a difference. Today, we operate across multiple states, touching thousands of 
                  lives every day.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our journey has been one of learning, growing, and adapting to meet the evolving 
                  needs of the communities we serve. Every challenge has made us stronger, every 
                  success has inspired us to reach further.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our journey"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className={`text-2xl lg:text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                   <value.icon className="w-8 h-8 text-white" />
                 </div>
                <h4 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;