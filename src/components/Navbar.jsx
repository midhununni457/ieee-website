export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 flex justify-between items-center px-6 py-4">
      <div className="text-white font-bold">IEEE MEC</div>
      <ul className="flex gap-6 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#execom">Execom</a></li>
        <li>
          <a href="#membership" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Get Membership
          </a>
        </li>
      </ul>
    </nav>
  );
}
