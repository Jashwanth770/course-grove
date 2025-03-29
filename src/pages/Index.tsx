
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import CoursesSection from "../components/CoursesSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
