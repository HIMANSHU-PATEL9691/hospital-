import { Target, Eye, Heart, Award, Users, Stethoscope } from 'lucide-react';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/animations';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every patient with empathy and care.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in healthcare.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Our experts collaborate for your best outcomes.',
  },
  {
    icon: Stethoscope,
    title: 'Innovation',
    description: 'We embrace cutting-edge medical technologies.',
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <FadeIn>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                About MedCare Hospital
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Providing Quality Healthcare{' '}
                <span className="gradient-text">Since 1990</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                MedCare Hospital has been a cornerstone of healthcare excellence for over 
                three decades. Our commitment to patient care, medical innovation, and 
                community health has made us a trusted partner in your wellness journey.
              </p>
            </FadeIn>

            {/* Mission & Vision */}
            <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-8" staggerDelay={0.15}>
              <StaggerItem>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    To deliver exceptional healthcare services with compassion and 
                    cutting-edge medical expertise.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    To be the most trusted healthcare provider, setting new standards 
                    in medical excellence globally.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right - Values */}
          <ScaleIn delay={0.3}>
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <FadeIn key={index} delay={0.1 * index}>
                    <div className="group p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <value.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{value.title}</h4>
                          <p className="text-muted-foreground text-sm">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
