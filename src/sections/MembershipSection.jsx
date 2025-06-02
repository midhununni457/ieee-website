export default function MembershipSection() {
  return (
    <section id="membership" className="py-24 max-w-6xl mx-auto px-4 bg-blue-950 text-white">
      <h2 className="text-3xl font-bold mb-4">Become a Member</h2>
      <p className="text-lg mb-6">
        Join a global community of tech enthusiasts, access exclusive resources, attend IEEE events, and grow your network.
      </p>
      <a
        href="https://www.ieee.org/membership/join/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium"
      >
        Join Now →
      </a>
    </section>
  );
}
