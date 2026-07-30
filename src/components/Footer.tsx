export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50" style={{ zIndex: 1, position: 'relative' }}>
      <div className="content-col py-6 text-center">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Zikun Yao
        </p>
      </div>
    </footer>
  );
}
