import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Gaurav" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl -z-10" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I am a passionate MERN Stack Developer with over 3 years of experience building scalable web applications. My journey started with a curiosity for how things work on the internet, which led me to master the art of full-stack development.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I thrive on solving complex problems and turning ideas into reality through code. Whether it's designing a responsive frontend or architecting a secure backend API, I ensure every detail is polished for the best user experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                <p className="text-slate-500">New Delhi, India</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Education</h4>
                <p className="text-slate-500">B.Tech in CS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;