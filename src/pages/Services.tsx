import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, Baby, Eye, Activity, Stethoscope, Syringe, Microscope, Scan, Thermometer, Shield, Clock, Users } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation. Our team of expert cardiologists uses the latest technology for heart disease prevention and treatment.',
    features: ['ECG & Echo', 'Angiography', 'Pacemaker Implantation', 'Cardiac Surgery'],
    color: 'bg-red-500',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological disorders including stroke, epilepsy, Parkinson\'s disease, and more. Our neurologists provide comprehensive evaluation and personalized treatment plans.',
    features: ['EEG & EMG', 'Stroke Care', 'Movement Disorders', 'Spine Treatment'],
    color: 'bg-purple-500',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Advanced bone and joint care for injuries, arthritis, and musculoskeletal conditions. We offer minimally invasive surgeries and comprehensive rehabilitation programs.',
    features: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Trauma Care'],
    color: 'bg-blue-500',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents. Our pediatric team provides preventive care, vaccinations, and treatment for childhood illnesses.',
    features: ['Well-Child Visits', 'Vaccinations', 'Pediatric Surgery', 'NICU'],
    color: 'bg-pink-500',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care from routine exams to complex surgeries. Our ophthalmologists treat cataracts, glaucoma, retinal disorders, and perform refractive surgeries.',
    features: ['Cataract Surgery', 'LASIK', 'Glaucoma Treatment', 'Retina Care'],
    color: 'bg-cyan-500',
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response teams and trauma care specialists. Our ER is equipped to handle all medical emergencies with immediate attention.',
    features: ['24/7 Availability', 'Trauma Care', 'Critical Care', 'Ambulance Service'],
    color: 'bg-orange-500',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare services for adults including preventive care, chronic disease management, and health screenings. Our physicians provide holistic patient care.',
    features: ['Health Checkups', 'Chronic Disease', 'Preventive Care', 'Consultations'],
    color: 'bg-teal-500',
  },
  {
    icon: Syringe,
    title: 'Vaccination',
    description: 'Comprehensive immunization services for all ages. We provide all routine and travel vaccinations following the latest medical guidelines.',
    features: ['Child Vaccines', 'Adult Vaccines', 'Travel Vaccines', 'Flu Shots'],
    color: 'bg-indigo-500',
  },
  {
    icon: Microscope,
    title: 'Laboratory',
    description: 'State-of-the-art diagnostic laboratory offering a wide range of tests. Quick and accurate results to aid in diagnosis and treatment monitoring.',
    features: ['Blood Tests', 'Pathology', 'Microbiology', 'Genetic Testing'],
    color: 'bg-amber-500',
  },
  {
    icon: Scan,
    title: 'Radiology',
    description: 'Advanced imaging services including X-ray, CT, MRI, and ultrasound. Our radiologists provide accurate diagnostic interpretations.',
    features: ['X-Ray', 'CT Scan', 'MRI', 'Ultrasound'],
    color: 'bg-slate-500',
  },
  {
    icon: Thermometer,
    title: 'Intensive Care',
    description: 'Advanced critical care units for patients requiring continuous monitoring. Our ICU is staffed by specialized intensivists and nurses.',
    features: ['24/7 Monitoring', 'Ventilator Support', 'Post-Surgery Care', 'Specialized Staff'],
    color: 'bg-rose-500',
  },
  {
    icon: Shield,
    title: 'Preventive Health',
    description: 'Comprehensive health screening packages and wellness programs. Focus on disease prevention and early detection for better outcomes.',
    features: ['Health Packages', 'Executive Checkups', 'Cancer Screening', 'Wellness Programs'],
    color: 'bg-green-500',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Services
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Comprehensive Medical Services
                </h1>
                <p className="text-lg text-white/80">
                  We offer a complete range of medical services designed to meet all your healthcare 
                  needs with the highest standards of quality and care.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card rounded-2xl p-6 shadow-card h-full flex flex-col"
                    whileHover={{ y: -8 }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl ${service.color} text-white mb-4 w-fit`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <div className="border-t border-border pt-4 mt-auto">
                      <h4 className="text-sm font-semibold mb-2">Key Services:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Need Help Choosing the Right Service?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Our patient coordinators are here to help you navigate our services and find the 
                  care you need. Schedule a consultation today.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
