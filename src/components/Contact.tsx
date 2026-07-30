import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-gray-100">
      <p className="section-subtitle">Contact</p>
      <h2 className="section-title mb-8">Get In Touch</h2>

      <div className="max-w-lg mx-auto space-y-4">
        <div className="card flex items-center gap-4">
          <HiMail className="text-medical shrink-0" size={22} />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
            <a
              href="mailto:ziqun.yao@yaozikun.top"
              className="text-sm text-gray-800 hover:text-accent transition-colors font-mono"
            >
              ziqun.yao@yaozikun.top
            </a>
          </div>
        </div>

        <div className="card flex items-center gap-4">
          <FaGithub className="text-medical shrink-0" size={22} />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">GitHub</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-800 hover:text-accent transition-colors font-mono"
            >
              github.com
            </a>
          </div>
        </div>

        <div className="card flex items-center gap-4">
          <HiLocationMarker className="text-medical shrink-0" size={22} />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
            <p className="text-sm text-gray-800 font-mono">China</p>
          </div>
        </div>
      </div>
    </section>
  );
}
