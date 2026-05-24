import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Nexus",
      description: "A full-featured online store with real-time inventory, Stripe integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "TaskFlow Pro",
      description: "Collaborative project management tool with drag-and-drop boards and team chat features.",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "CryptoPulse",
      description: "Real-time cryptocurrency tracker with interactive charts and personalized watchlists.",
      tech: ["React", "Chart.js", "CoinGecko API", "Firebase"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-md">A selection of my recent works where I've solved complex problems with elegant solutions.</p>
          </div>
          <a href="#" className="text-indigo-600 font-semibold hover:underline">View all projects →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;