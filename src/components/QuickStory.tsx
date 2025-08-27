import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface QuickStoryProps {
  darkMode: boolean;
}

const QuickStory: React.FC<QuickStoryProps> = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-subtle">
              <img
                src="https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Children learning together"
                className="w-full h-96 object-cover rounded-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full">
              <Heart className="w-4 h-4 text-orange-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                Our Story
              </span>
            </div>

            <h2 className={`text-3xl lg:text-4xl font-bold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Every Child Deserves a{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Chance at Life
              </span>
            </h2>

            <div className="space-y-4">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Every child deserves a chance at education. Every family deserves a meal. 
                Every community deserves hope. Unity for Helping Foundation is working every 
                day to make this possible.
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Through our comprehensive programs, we're not just providing immediate relief – 
                we're building sustainable futures. From the classroom to the clinic, from the 
                kitchen to the community center, we're there every step of the way.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                'Free Education for All',
                'Nutritious Daily Meals',
                'Healthcare Access',
                'Community Empowerment'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className={`group px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400' 
                  : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600'
              }`}>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStory;