import React, { useEffect, useState, useRef } from 'react';
import { Users, BookOpen, Heart, Stethoscope } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

interface ImpactCounterProps {
  darkMode: boolean;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({ darkMode }) => {
  const stats = [
    {
      icon: Heart,
      value: 50000,
      suffix: '+',
      label: 'Meals Served',
      description: 'Nutritious meals provided to children and families'
    },
    {
      icon: BookOpen,
      value: 12000,
      suffix: '+',
      label: 'Children Educated',
      description: 'Students enrolled in our education programs'
    },
    {
      icon: Stethoscope,
      value: 300,
      suffix: '+',
      label: 'Medical Camps',
      description: 'Free healthcare camps organized in rural areas'
    },
    {
      icon: Users,
      value: 1200,
      suffix: '+',
      label: 'Volunteers',
      description: 'Dedicated volunteers making a difference'
    }
  ];

  const StatCard: React.FC<{ stat: any }> = ({ stat }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) el.classList.add('reveal', 'visible');
      }, { threshold: 0.15 });
      obs.observe(el);
      return () => obs.disconnect();
    }, []);

    const Icon = stat.icon;

    return (
      <div ref={ref} className={`card p-6 rounded-md`}>
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-500">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <Counter end={stat.value} duration={2000} suffix={stat.suffix} />

        <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.label}</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.description}</p>
      </div>
    );
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} site-bg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Impact in Numbers
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Every number represents a life touched, a hope restored, and a future brightened through our collective efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => <StatCard key={i} stat={s} />)}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;