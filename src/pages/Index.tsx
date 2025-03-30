
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import CoursesSection from "../components/CoursesSection";
import CategorySection from "../components/CategorySection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import BecomeInstructorSection from "../components/BecomeInstructorSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <CoursesSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BecomeInstructorSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
