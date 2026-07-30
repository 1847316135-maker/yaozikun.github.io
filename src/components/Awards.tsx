import { HiBadgeCheck } from 'react-icons/hi';

const awards = [
  {
    title: 'AI-Related Competitions',
    items: ['Participation in AI-driven bioinformatics challenges'],
  },
  {
    title: 'Mathematical Modeling Competitions',
    items: ['Experience in applied mathematical modeling contests'],
  },
  {
    title: 'Research Awards',
    items: ['Undergraduate research program recognition'],
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section-container border-t border-gray-100">
      <p className="section-subtitle">Awards</p>
      <h2 className="section-title mb-8">Awards & Honors</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {awards.map((category) => (
          <div key={category.title} className="card">
            <div className="flex items-center gap-2 mb-3">
              <HiBadgeCheck className="text-medical shrink-0" size={20} />
              <h3 className="font-semibold text-gray-800 text-sm">
                {category.title}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {category.items.map((item) => (
                <li key={item} className="text-sm text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
