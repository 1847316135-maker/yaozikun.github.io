const majorAwards = [
  {
    title: 'National Second Prize',
    detail: 'China Collegiate Computing Contest (C4 — National Final)',
    note: '国赛二等奖',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    ),
  },
  {
    title: 'First Prize',
    detail: 'AI替繁 Challenge',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
  {
    title: 'Best Popularity Award',
    detail: 'AI替繁 Challenge',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/></svg>
    ),
  },
  {
    title: 'Provincial Excellent Award',
    detail: 'Biomedical Innovation Competition',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
    ),
  },
  {
    title: 'Second Prize',
    detail: 'Liyuan Innovation & Entrepreneurship Competition',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    ),
  },
];

const otherAwards = [
  { title: 'S Prize', detail: 'Mathematical Contest in Modeling' },
];

export default function AwardsComponent() {
  return (
    <section id="awards" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col">
        <p className="section-label">Awards & Honors</p>
        <h2 className="section-heading">Recognition</h2>

        {/* Major awards: 2-column grid */}
        <div className="grid gap-3 md:grid-cols-2">
          {majorAwards.map((a) => (
            <div key={a.detail + a.title} className="glass p-4 flex items-start gap-3 group">
              <span className="text-blue-400 mt-0.5 shrink-0 group-hover:text-cyan-300 transition-colors">
                {a.icon}
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-white">{a.title}</span>
                  {a.note && (
                    <span className="text-[0.65rem] font-medium text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
                      {a.note}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Minor: subtle inline text at bottom */}
        <div className="mt-4 text-center">
          {otherAwards.map((a) => (
            <span key={a.title} className="text-xs text-slate-500">
              {a.title} — {a.detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
