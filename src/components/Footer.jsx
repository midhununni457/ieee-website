export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">IEEE MEC</h3>
          <p className="text-gray-400 text-sm">
            Inspiring innovation and collaboration through technology and community.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="#awards" className="hover:underline">Awards</a></li>
            <li><a href="#execom" className="hover:underline">Execom</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-400">
            Model Engineering College<br />
            Thrikkakara, Kochi, Kerala<br />
            <br />
            Email: <a href="mailto:ieee@mec.ac.in" className="underline">ieee@mec.ac.in</a>
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IEEE MEC. All rights reserved.
      </div>
    </footer>
  );
}
