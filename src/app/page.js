import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import EventsSection from '../sections/EventsSection';
import GallerySection from '../sections/GallerySection'
import ExecomSection from '../sections/ExecomSection';
import MembershipSection from '../sections/MembershipSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <EventsSection />
      <ExecomSection />
      <MembershipSection />
      <Footer/>
    </main>
  );
}
