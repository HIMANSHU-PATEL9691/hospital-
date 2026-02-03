import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Phone } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
  },
  {
    name: 'Dr. James Anderson',
    specialty: 'Orthopedic Surgeon',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Medical Team
            </span>
            <h2 className="section-title">
              Meet Our <span className="gradient-text">Expert Doctors</span>
            </h2>
            <p className="section-subtitle">
              Our team of highly qualified doctors are dedicated to providing 
              personalized care with decades of combined experience.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {doctors.map((doctor, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-card shadow-card"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Appear on hover */}
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {[Phone, Facebook, Twitter, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-1">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-sm">{doctor.experience} Experience</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DoctorsSection;
