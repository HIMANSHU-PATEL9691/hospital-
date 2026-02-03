import { Navigation, Footer } from '@/components/layout';
import {
  HeroBanner,
  AboutSection,
  ServicesSection,
  DoctorsSection,
  DepartmentsSection,
  WhyChooseUs,
  TestimonialsSection,
  CTASection,
} from '@/components/home';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroBanner />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <DepartmentsSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
