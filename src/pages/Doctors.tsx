import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Star, Filter } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    department: 'Heart Center',
    experience: '15+ Years',
    education: 'MD, FACC - Harvard Medical School',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 234,
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    department: 'Neuroscience Center',
    experience: '12+ Years',
    education: 'MD, PhD - Johns Hopkins University',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    rating: 4.8,
    reviews: 189,
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrics',
    department: 'Children\'s Hospital',
    experience: '10+ Years',
    education: 'MD - Stanford University',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 312,
  },
  {
    name: 'Dr. James Anderson',
    specialty: 'Orthopedics',
    department: 'Bone & Joint Center',
    experience: '18+ Years',
    education: 'MD, FAAOS - Yale University',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
    rating: 4.7,
    reviews: 156,
  },
  {
    name: 'Dr. Lisa Martinez',
    specialty: 'Ophthalmology',
    department: 'Eye Center',
    experience: '14+ Years',
    education: 'MD - UCLA Medical School',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop',
    rating: 4.8,
    reviews: 201,
  },
  {
    name: 'Dr. Robert Kim',
    specialty: 'General Medicine',
    department: 'Primary Care',
    experience: '20+ Years',
    education: 'MD, FACP - Columbia University',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 445,
  },
  {
    name: 'Dr. Amanda Foster',
    specialty: 'Dermatology',
    department: 'Skin Care Center',
    experience: '8+ Years',
    education: 'MD - Duke University',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
    rating: 4.6,
    reviews: 123,
  },
  {
    name: 'Dr. David Park',
    specialty: 'Emergency Medicine',
    department: 'Emergency Department',
    experience: '16+ Years',
    education: 'MD - University of Michigan',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    rating: 4.8,
    reviews: 289,
  },
];

const departments = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Ophthalmology', 'General Medicine', 'Dermatology', 'Emergency Medicine'];

const Doctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredDoctors = selectedDepartment === 'All'
    ? doctors
    : doctors.filter((doc) => doc.specialty === selectedDepartment);

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
                  Our Doctors
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Meet Our Expert Medical Team
                </h1>
                <p className="text-lg text-white/80">
                  Our team of highly qualified doctors are dedicated to providing personalized care 
                  with decades of combined experience.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="flex-shrink-0"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {filteredDoctors.map((doctor, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="group bg-card rounded-2xl overflow-hidden shadow-card"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Contact buttons on hover */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                        <span className="text-muted-foreground text-sm">({doctor.reviews} reviews)</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-1">{doctor.name}</h3>
                      <p className="text-primary font-medium text-sm mb-1">{doctor.specialty}</p>
                      <p className="text-muted-foreground text-sm mb-2">{doctor.department}</p>
                      <p className="text-muted-foreground text-xs">{doctor.experience} Experience</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
