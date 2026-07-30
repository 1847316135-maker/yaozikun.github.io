export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ziqun Yao. All rights reserved.
        </p>
        <p className="text-xs text-gray-300 mt-1">
          Built with React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
