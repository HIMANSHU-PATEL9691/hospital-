import { motion } from 'framer-motion';
import { Target, Eye, Award, History, Trophy, Shield, Users, Heart } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/animations';

const timeline = [
  { year: '1990', title: 'Foundation', description: 'MedCare Hospital was established with a vision to provide accessible healthcare.' },
  { year: '1998', title: 'First Expansion', description: 'Opened our second branch and added 5 new departments.' },
  { year: '2005', title: 'Technology Upgrade', description: 'Introduced state-of-the-art medical equipment and digital records.' },
  { year: '2012', title: 'International Accreditation', description: 'Received JCI accreditation for excellence in healthcare.' },
  { year: '2018', title: 'Research Center', description: 'Launched our medical research and innovation center.' },
  { year: '2024', title: 'Digital Healthcare', description: 'Pioneered telemedicine and AI-assisted diagnostics.' },
];

const awards = [
  { title: 'Best Hospital Award', year: '2024', org: 'Healthcare Excellence Council' },
  { title: 'Patient Safety Excellence', year: '2023', org: 'National Health Authority' },
  { title: 'JCI Gold Accreditation', year: '2022', org: 'Joint Commission International' },
  { title: 'Green Hospital Certification', year: '2021', org: 'Environmental Health Board' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  About Us
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Caring for Life Since 1990
                </h1>
                <p className="text-lg text-white/80">
                  For over three decades, MedCare Hospital has been at the forefront of medical excellence, 
                  combining compassionate care with cutting-edge technology.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <SlideIn direction="left">
                <div className="bg-card rounded-3xl p-8 shadow-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-primary text-primary-foreground">
                      <Target className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To provide exceptional healthcare services that improve the health and well-being 
                    of our community. We are committed to delivering compassionate, personalized care 
                    with the highest standards of medical excellence and patient safety.
                  </p>
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <div className="bg-card rounded-3xl p-8 shadow-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-secondary text-secondary-foreground">
                      <Eye className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To be the most trusted healthcare provider in the region, recognized for our 
                    commitment to innovation, quality, and patient-centered care. We aspire to set 
                    new standards in healthcare delivery and medical research.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Journey
                </span>
                <h2 className="section-title">
                  History of <span className="gradient-text">Excellence</span>
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative pl-12 pb-12 last:pb-0"
                    whileHover={{ x: 10 }}
                  >
                    {/* Timeline line */}
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-[18px] top-10 w-0.5 h-full bg-primary/20" />
                    )}
                    
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-0 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm"
                      whileHover={{ scale: 1.2 }}
                    >
                      <History className="h-5 w-5" />
                    </motion.div>
                    
                    <div className="bg-card rounded-2xl p-6 shadow-card ml-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Recognition
                </span>
                <h2 className="section-title">
                  Awards & <span className="gradient-text">Accreditations</span>
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {awards.map((award, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card rounded-2xl p-6 shadow-card text-center h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent mb-4">
                      <Trophy className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2">{award.title}</h3>
                    <p className="text-primary font-medium mb-1">{award.year}</p>
                    <p className="text-muted-foreground text-sm">{award.org}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  What We Stand For
                </span>
                <h2 className="section-title">
                  Our Core <span className="gradient-text">Values</span>
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: 'Compassion', desc: 'We treat every patient with empathy, kindness, and respect.' },
                { icon: Shield, title: 'Integrity', desc: 'We uphold the highest ethical standards in all we do.' },
                { icon: Award, title: 'Excellence', desc: 'We continuously strive for the best outcomes.' },
                { icon: Users, title: 'Teamwork', desc: 'We collaborate to deliver comprehensive care.' },
              ].map((value, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-6 shadow-card text-center h-full">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
