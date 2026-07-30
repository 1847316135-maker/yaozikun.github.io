import { HiLightBulb } from 'react-icons/hi';

interface Project {
  title: string;
  description: string;
  keywords: string[];
}

const projects: Project[] = [
  {
    title: 'PathoMamba / GnTxSPdb',
    description:
      'An AI-driven bioinformatics framework integrating protein language models, Mamba architecture and knowledge-based reasoning for bacterial target prediction and biological interpretation.',
    keywords: ['Bioinformatics', 'Protein Language Model', 'Mamba', 'Drug Target Prediction'],
  },
  {
    title: 'Digital Bacterium',
    description:
      'A computational framework simulating antibiotic effects on bacterial systems by integrating AI prediction, biological mechanisms and dynamic modeling.',
    keywords: ['Synthetic Biology', 'Systems Biology', 'Computational Modeling'],
  },
  {
    title: 'ISLE / ISLEMamba',
    description:
      'A protein sequence analysis framework based on bidirectional Mamba models and sliding-window strategies.',
    keywords: ['Deep Learning', 'Protein Representation', 'Sequence Modeling'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container border-t border-gray-100">
      <p className="section-subtitle">Research</p>
      <h2 className="section-title mb-8">Research Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <HiLightBulb className="text-medical shrink-0" size={20} />
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-2 py-0.5 bg-accent-subtle text-accent-light rounded-full font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
