export default function Hero() {
  return (
    <section className="!py-0 relative overflow-hidden" style={{ zIndex: 1 }}>
      <div className="content-col py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="anim-up">
            <p className="text-[0.7rem] font-semibold text-blue-400 tracking-[0.2em] uppercase mb-4">
              Shenzhen University &nbsp;·&nbsp; Biomedical Engineering
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-3">
              Zikun{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Yao
              </span>
            </h1>

            <p className="text-xl text-slate-300 font-light tracking-wide mb-4">
              AI &times; Biology
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-6">
              Building computational systems for biological discovery.
            </p>

            {/* Focus */}
            <div className="mb-6">
              <p className="text-[0.65rem] font-semibold text-slate-500 uppercase tracking-widest mb-2">Focus</p>
              <div className="flex flex-wrap gap-2">
                {['Protein Language Models', 'Bioinformatics', 'Biomedical AI'].map((f) => (
                  <span key={f} className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300 bg-slate-900/50">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-2.5">
              <a href="/cv.pdf" className="btn-accent text-xs" download>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                CV
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="mailto:zikun.yao@yaozikun.top" className="btn-ghost text-xs">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email
              </a>
            </div>
          </div>

          {/* ── Right: Large photo with orbital halo ── */}
          <div className="flex justify-center anim-up anim-up-2">
            <div className="relative flex items-center justify-center" style={{ width: 340, height: 340 }}>
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent blur-2xl anim-glow" />

              {/* Molecular orbit rings */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 340" fill="none">
                {/* Ring 1 */}
                <ellipse cx="170" cy="170" rx="150" ry="60" stroke="#3b82f6" strokeWidth="0.4" opacity="0.15"
                  strokeDasharray="8 6" transform="rotate(-15 170 170)">
                  <animateTransform attributeName="transform" type="rotate" from="-15 170 170" to="345 170 170" dur="30s" repeatCount="indefinite"/>
                </ellipse>
                {/* Ring 2 */}
                <ellipse cx="170" cy="170" rx="150" ry="60" stroke="#06b6d4" strokeWidth="0.4" opacity="0.12"
                  strokeDasharray="4 10" transform="rotate(45 170 170)">
                  <animateTransform attributeName="transform" type="rotate" from="45 170 170" to="405 170 170" dur="40s" repeatCount="indefinite"/>
                </ellipse>
                {/* Ring 3 */}
                <ellipse cx="170" cy="170" rx="135" ry="50" stroke="#60a5fa" strokeWidth="0.3" opacity="0.1"
                  strokeDasharray="3 12" transform="rotate(75 170 170)">
                  <animateTransform attributeName="transform" type="rotate" from="75 170 170" to="435 170 170" dur="35s" repeatCount="indefinite"/>
                </ellipse>
                {/* Small nodes on rings */}
                {[30, 120, 210, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 170 + 135 * Math.cos(rad);
                  const cy = 170 + 50 * Math.sin(rad);
                  return (
                    <circle key={i} cx={cx} cy={cy} r="2" fill={i % 2 === 0 ? '#3b82f6' : '#06b6d4'} opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${2 + i}s`} repeatCount="indefinite"/>
                    </circle>
                  );
                })}
              </svg>

              {/* Photo */}
              <div className="relative w-60 h-60 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border border-slate-700/30"
                style={{ boxShadow: '0 0 60px rgba(59,130,246,0.12), 0 0 120px rgba(59,130,246,0.05)' }}>
                <img
                  src="/yaozikun.png"
                  alt="Zikun Yao"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
