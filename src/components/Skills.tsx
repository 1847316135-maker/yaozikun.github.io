interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Bioinformatics',
    skills: ['BLAST', 'Protein Sequence Analysis', 'Protein Language Models'],
  },
  {
    name: 'AI & ML',
    skills: ['PyTorch', 'Deep Learning', 'Machine Learning'],
  },
  {
    name: 'Engineering',
    skills: ['Linux', 'Docker', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-gray-100">
      <p className="section-subtitle">Skills</p>
      <h2 className="section-title mb-8">Technical Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat) => (
          <div key={cat.name} className="card">
            <h3 className="text-sm font-semibold text-medical uppercase tracking-wider mb-3">
              {cat.name}
            </h3>
            <ul className="space-y-1.5">
              {cat.skills.map((skill) => (
                <li key={skill} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
