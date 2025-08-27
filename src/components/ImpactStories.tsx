import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface ImpactStoriesProps {
  darkMode: boolean;
}

const ImpactStories: React.FC<ImpactStoriesProps> = ({ darkMode }) => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: 'Rani',
      age: 9,
      location: 'Mumbai Slums',
      image: 'https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      story: 'Meet Rani, a 9-year-old who worked at a roadside stall to help her family. Through our education program, she is now in Grade 4 and dreams of becoming a teacher. Her bright smile and determination inspire everyone around her.',
      impact: 'From Child Labor to Classroom',
      category: 'Education',
      quote: 'I want to teach other children like me so they can have dreams too.',
      rating: 5
    },
    {
      name: 'The Sharma Family',
      age: null,
      location: 'Flood-affected Village, Bihar',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      story: 'During the 2023 floods, we helped rebuild homes for 200 families including the Sharmas. Today, those families are back on their feet with stronger homes and renewed hope for the future.',
      impact: 'From Disaster to Recovery',
      category: 'Community Relief',
      quote: 'Unity Foundation gave us more than shelter - they gave us hope when we had lost everything.',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      age: 45,
      location: 'Rural Rajasthan',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      story: 'Our healthcare camps helped Suresh, a farmer, receive life-saving treatment for a heart condition he couldn\'t afford. Today, he\'s healthy and back to supporting his family.',
      impact: 'From Illness to Health',
      category: 'Healthcare',
      quote: 'The doctors at the camp saved my life. Now I can work and take care of my children.',
      rating: 5
    },
    {
      name: 'Priya Devi',
      age: 32,
      location: 'Rural Uttar Pradesh',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      story: 'After completing our tailoring workshop, Priya started her own business from home. She now employs 5 other women from her village and supports her children\'s education.',
      impact: 'From Dependency to Entrepreneurship',
      category: 'Women Empowerment',
      quote: 'I never thought I could run my own business. Now I\'m helping other women too.',
      rating: 5
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-orange-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              Impact Stories
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Lives Transformed,{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Hope Restored
            </span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Every number in our impact counter represents a real person with a real story. 
            Here are just a few of the lives we've had the privilege to touch.
          </p>
        </div>

        {/* Story Carousel */}
        <div className="relative">
          <div className={`card ${darkMode ? '' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={stories[currentStory].image}
                  alt={stories[currentStory].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {stories[currentStory].category}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevStory}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-150"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextStory}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-150"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    {[...Array(stories[currentStory].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stories[currentStory].name}
                    {stories[currentStory].age && (
                      <span className={`text-lg font-normal ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        , {stories[currentStory].age} years old
                      </span>
                    )}
                  </h3>
                  <p className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'} mb-4`}>
                    {stories[currentStory].location}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                  }`}>
                    {stories[currentStory].impact}
                  </div>
                </div>

                <div className="mb-6">
                  <Quote className={`w-8 h-8 ${darkMode ? 'text-gray-600' : 'text-gray-300'} mb-4`} />
                  <p className={`text-lg italic mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    "{stories[currentStory].quote}"
                  </p>
                </div>

                <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stories[currentStory].story}
                </p>
              </div>
            </div>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory 
                    ? 'bg-orange-500 w-8' 
                    : darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Be Part of Someone's Success Story
          </h3>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Every donation, every volunteer hour, every act of kindness creates ripples of change 
            that transform lives and communities.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Start Making a Difference Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;