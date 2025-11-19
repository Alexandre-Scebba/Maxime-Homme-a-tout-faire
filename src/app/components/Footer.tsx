export default function Footer() {
  return (
    <footer className="w-full bg-sky-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-2">
        <a href="#" className="flex items-center gap-2 hover:opacity-80">
          <img src="/file.svg" alt="Maxime Peinture Logo" className="w-7 h-7 rounded-full" />
          <span className="font-bold text-base">Maxime Peinture</span>
        </a>
        <div className="text-xs text-center mt-2 w-full">
          &copy; {new Date().getFullYear()} Maxime Peinture. All rights reserved.
        </div>
        <div className="flex gap-4 mt-2">
          <a href="tel:0000000000" className="hover:underline">Call: 000-000-0000</a>
          <a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
