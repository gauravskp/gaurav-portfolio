import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Gaurav. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;