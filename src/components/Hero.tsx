import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="section-container pt-24 md:pt-32 pb-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent tracking-tight mb-4">
          Ziqun Yao
        </h1>
        <p className="text-lg md:text-xl text-medical font-medium mb-3">
          Biomedical Engineering Student
        </p>
        <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Researching AI-driven approaches for biological and medical problems.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
            download
          >
            <HiDownload size={18} />
            Download CV
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          <a
            href="mailto:ziqun.yao@yaozikun.top"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <HiMail size={18} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
