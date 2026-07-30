export default function About() {
  return (
    <section id="about" className="section-container border-t border-gray-100">
      <p className="section-subtitle">About</p>
      <h2 className="section-title mb-6">About Me</h2>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
        <p>
          I am currently an undergraduate student in Biomedical Engineering at{' '}
          <span className="font-medium text-gray-800">Shenzhen University</span>.
        </p>
        <p>
          My research interests lie at the intersection of{' '}
          <strong className="text-gray-800">artificial intelligence</strong>,{' '}
          <strong className="text-gray-800">bioinformatics</strong>, and{' '}
          <strong className="text-gray-800">computational biology</strong>.
          I aim to leverage deep learning, protein language models, and
          data-driven approaches to address fundamental problems in life sciences.
        </p>
        <p>
          I am actively seeking graduate research opportunities where I can
          contribute to cutting-edge research in AI-driven biology and medicine.
        </p>
      </div>
    </section>
  );
}
