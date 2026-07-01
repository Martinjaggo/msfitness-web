import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import VideoSection from "./components/VideoSection";
import TargetAudience from "./components/TargetAudience";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-950">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <TargetAudience />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}