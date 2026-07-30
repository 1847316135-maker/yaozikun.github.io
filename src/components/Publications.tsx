import { HiDocumentText } from 'react-icons/hi';

interface Publication {
  title: string;
  status: 'Published' | 'Under Review' | 'Under Preparation';
  venue?: string;
  authors?: string;
  note?: string;
}

const publications: Publication[] = [
  {
    title: 'Antimicrobial Resistance Prediction via Deep Learning and Genomic Context Modeling',
    status: 'Under Preparation',
  },
  {
    title: 'Protein Sequence Analysis with Bidirectional State Space Models',
    status: 'Under Preparation',
  },
  {
    title: 'A Knowledge-Enhanced Framework for Bacterial Drug Target Discovery',
    status: 'Under Preparation',
  },
];

const categoryLabels: Record<string, string> = {
  papers: 'Research Papers',
  conferences: 'Conference Presentations',
  patents: 'Patents',
  copyrights: 'Software Copyrights',
};

export default function Publications() {
  return (
    <section id="publications" className="section-container border-t border-gray-100">
      <p className="section-subtitle">Publications</p>
      <h2 className="section-title mb-8">Publications & Research Outputs</h2>

      <div className="space-y-8">
        {/* Research Papers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <HiDocumentText className="text-medical" size={20} />
            Research Papers
          </h3>
          <ul className="space-y-3">
            {publications.map((pub) => (
              <li key={pub.title} className="card">
                <p className="font-medium text-gray-800 mb-1">{pub.title}</p>
                {pub.authors && (
                  <p className="text-sm text-gray-500 mb-1">{pub.authors}</p>
                )}
                <div className="flex items-center gap-2">
                  {pub.venue && (
                    <span className="text-sm text-gray-600 italic">{pub.venue}</span>
                  )}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      pub.status === 'Published'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {pub.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Other outputs */}
        <div className="grid gap-6 md:grid-cols-3">
          {['conferences', 'patents', 'copyrights'].map((cat) => (
            <div key={cat} className="card text-center">
              <h4 className="font-medium text-gray-800 mb-2">
                {categoryLabels[cat]}
              </h4>
              <p className="text-sm text-gray-400 italic">—</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
