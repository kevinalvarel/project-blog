// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-700 bg-white dark:bg-black text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Blog. All rights reserved.
        </span>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="/About"
            className="hover:text-black dark:hover:text-white transition"
          >
            About
          </a>
          <a
            href="/Blog"
            className="hover:text-black dark:hover:text-white transition"
          >
            Blog
          </a>
          <a
            href="/Contact"
            className="hover:text-black dark:hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
