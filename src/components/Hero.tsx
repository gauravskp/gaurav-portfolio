import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-6">
          Available for freelance & full-time
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Building robust <span className="text-indigo-600">MERN</span> <br className="hidden md:block" /> stack applications.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I'm Gaurav. I specialize in crafting high-performance web applications using MongoDB, Express, React, and Node.js with a focus on clean code and user-centric design.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;