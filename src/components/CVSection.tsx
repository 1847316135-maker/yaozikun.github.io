import { HiDownload, HiDocumentText } from 'react-icons/hi';

export default function CVSection() {
  return (
    <section id="cv" className="section-container border-t border-gray-100">
      <div className="text-center">
        <HiDocumentText className="mx-auto text-medical mb-4" size={40} />
        <p className="section-subtitle text-center">Curriculum Vitae</p>
        <h2 className="section-title mb-4 text-center">Full CV</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Download my full curriculum vitae for details on education, research experience,
          and academic background.
        </p>
        <a
          href="/cv.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
          download
        >
          <HiDownload size={20} />
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
