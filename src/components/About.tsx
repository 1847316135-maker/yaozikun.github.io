export default function About() {
  return (
    <section id="about" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col">
        <div className="max-w-2xl space-y-3 text-sm text-slate-400 leading-relaxed">
          <p>
            Undergraduate student at{' '}
            <strong className="text-slate-200 font-medium">Shenzhen University</strong>,
            School of Medicine. Transitioned from Clinical Medicine to Biomedical
            Engineering — bringing a dual perspective to computational biology.
          </p>
          <p>
            I build AI-driven tools for biological sequence analysis, protein
            function prediction, and biomedical data interpretation.
          </p>
        </div>
      </div>
    </section>
  );
}
