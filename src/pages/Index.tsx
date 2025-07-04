
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertyTypes from '@/components/PropertyTypes';
import FeaturedProperties from '@/components/FeaturedProperties';
import Features from '@/components/Features';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyTypes />
      <FeaturedProperties />
      <Features />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;