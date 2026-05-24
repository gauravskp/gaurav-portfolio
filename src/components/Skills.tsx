import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io", "JWT Auth"]
    },
    {
      title: "Database & DevOps",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600">The tools and technologies I use to bring projects to life.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                    {skill}
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

export default Skills;