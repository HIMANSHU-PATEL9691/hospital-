import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Heart, Brain, Bone, Baby, Eye, Pill, Activity } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological disorders with cutting-edge technology.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Advanced bone and joint care for mobility and pain-free living.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents.',
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care from routine exams to complex surgeries.',
    color: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response teams.',
    color: 'bg-orange-500/10 text-orange-500',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">Medical Services</span>
            </h2>
            <p className="section-subtitle">
              We offer a wide range of medical services to meet all your healthcare needs 
              with the highest standards of quality and care.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="card-medical group cursor-pointer h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-4 transition-transform group-hover:scale-110`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
