import { motion } from 'framer-motion';
import { Heart, Brain, Bone, Baby, Eye, Activity, Stethoscope, Syringe, Microscope, Scan, Thermometer, Shield, ArrowRight, Phone, Users, Clock } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';

const departments = [
  {
    icon: Heart,
    name: 'Cardiology',
    description: 'Our Cardiology department is equipped with the latest technology for heart disease diagnosis and treatment. Our team of expert cardiologists provides comprehensive care.',
    doctors: 12,
    procedures: ['ECG & Echocardiography', 'Angioplasty', 'Bypass Surgery', 'Pacemaker Implantation'],
    color: 'bg-red-500',
  },
  {
    icon: Brain,
    name: 'Neurology',
    description: 'The Neurology department specializes in disorders of the nervous system. We offer advanced diagnostic and therapeutic services for various neurological conditions.',
    doctors: 8,
    procedures: ['Brain Mapping', 'Stroke Treatment', 'Epilepsy Management', 'Movement Disorders'],
    color: 'bg-purple-500',
  },
  {
    icon: Bone,
    name: 'Orthopedics',
    description: 'Our Orthopedic department provides comprehensive care for musculoskeletal conditions. We specialize in joint replacements and sports medicine.',
    doctors: 10,
    procedures: ['Joint Replacement', 'Arthroscopy', 'Spine Surgery', 'Fracture Care'],
    color: 'bg-blue-500',
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description: 'The Pediatrics department offers specialized healthcare for children from birth through adolescence. Our child-friendly environment ensures comfortable care.',
    doctors: 15,
    procedures: ['Well-Child Visits', 'Vaccinations', 'Pediatric Surgery', 'Neonatal Care'],
    color: 'bg-pink-500',
  },
  {
    icon: Eye,
    name: 'Ophthalmology',
    description: 'Our Eye Care Center provides comprehensive eye care services from routine exams to complex surgeries using state-of-the-art equipment.',
    doctors: 6,
    procedures: ['Cataract Surgery', 'LASIK', 'Glaucoma Treatment', 'Retina Surgery'],
    color: 'bg-cyan-500',
  },
  {
    icon: Activity,
    name: 'Emergency Medicine',
    description: 'Our 24/7 Emergency Department is staffed by experienced physicians and equipped to handle all medical emergencies with rapid response.',
    doctors: 20,
    procedures: ['Trauma Care', 'Critical Care', 'Resuscitation', 'Emergency Surgery'],
    color: 'bg-orange-500',
  },
  {
    icon: Stethoscope,
    name: 'Internal Medicine',
    description: 'The Internal Medicine department provides comprehensive primary care for adults, focusing on disease prevention and management.',
    doctors: 18,
    procedures: ['Health Screenings', 'Chronic Disease Management', 'Preventive Care', 'Geriatric Care'],
    color: 'bg-teal-500',
  },
  {
    icon: Microscope,
    name: 'Pathology & Lab',
    description: 'Our state-of-the-art laboratory provides accurate diagnostic testing with quick turnaround times to support clinical decision-making.',
    doctors: 5,
    procedures: ['Blood Tests', 'Histopathology', 'Microbiology', 'Genetic Testing'],
    color: 'bg-amber-500',
  },
];

const Departments = () => {
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
                  Our Departments
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Specialized Medical Departments
                </h1>
                <p className="text-lg text-white/80">
                  Explore our specialized departments, each equipped with modern facilities 
                  and staffed by expert medical professionals.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Departments List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {departments.map((dept, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-card rounded-3xl p-6 md:p-8 shadow-card overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                      {/* Icon */}
                      <motion.div
                        className={`p-6 rounded-2xl ${dept.color} text-white w-fit`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <dept.icon className="h-10 w-10" />
                      </motion.div>

                      {/* Content */}
                      <div>
                        <h3 className="font-serif text-2xl font-bold mb-2">{dept.name}</h3>
                        <p className="text-muted-foreground mb-4">{dept.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {dept.procedures.map((proc, i) => (
                            <span
                              key={i}
                              className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                            >
                              {proc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats & CTA */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-5 w-5" />
                          <span className="font-semibold text-foreground">{dept.doctors}</span>
                          <span>Doctors</span>
                        </div>
                        <Button className="btn-hero text-sm">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Need Help Finding the Right Department?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Our patient coordinators can help guide you to the right specialist 
                  based on your symptoms and needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call: +1 (234) 567-890
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
