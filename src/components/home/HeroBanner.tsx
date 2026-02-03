import { motion } from 'framer-motion';
import { ArrowRight, Play, Calendar, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn, SplashCursor } from '@/components/animations';
import heroImage from '@/assets/hero-hospital.jpg';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <SplashCursor />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MedCare Hospital"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <SlideIn direction="left" delay={0.2}>
            <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 50,000+ Patients
            </span>
          </SlideIn>

          <FadeIn delay={0.3}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Your Health Is Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground via-secondary to-primary-foreground">
                Top Priority
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Experience world-class healthcare with our team of expert doctors and 
              state-of-the-art facilities. We're committed to providing compassionate 
              care for you and your family.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-hero group">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-hero-outline group">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.9}>
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { number: '30+', label: 'Years Experience' },
                { number: '200+', label: 'Expert Doctors' },
                { number: '50k+', label: 'Happy Patients' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Emergency Banner */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-destructive/90 backdrop-blur-sm py-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">24/7 Emergency Services</span>
          </div>
          <span className="hidden sm:block">|</span>
          <a href="tel:+1234567890" className="font-bold text-lg hover:underline">
            Call Now: +1 (234) 567-890
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
