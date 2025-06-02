export default function HeroSection() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Create, connect,<br />and unlock your full potential.
      </h1>
      <div className="flex gap-4">
        <a href="#membership" className="bg-blue-500 text-white px-6 py-2 rounded-md">Get Membership</a>
        <a href="#about" className="text-blue-400 underline">Explore benefits →</a>
      </div>
    </section>
  );
}
