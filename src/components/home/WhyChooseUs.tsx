import { Users, Award, Smile, Building } from 'lucide-react';
import { FadeIn, AnimatedCounter, BounceIn } from '@/components/animations';

const stats = [
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Expert Doctors',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Smile,
    value: 50000,
    suffix: '+',
    label: 'Happy Patients',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Award,
    value: 30,
    suffix: '+',
    label: 'Years Experience',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Building,
    value: 15,
    suffix: '',
    label: 'Hospital Branches',
    color: 'bg-success/10 text-success',
  },
];

const features = [
  'State-of-the-art medical equipment',
  '24/7 emergency services',
  'Personalized patient care',
  'International healthcare standards',
  'Affordable treatment options',
  'Multi-specialty expertise',
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats */}
          <div>
            <FadeIn>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                We Bring <span className="gradient-text">Healthcare</span> to You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At MedCare, we combine cutting-edge technology with compassionate care. 
                Our track record speaks for itself through the numbers that matter most.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <BounceIn key={index} delay={index * 0.1}>
                  <div className="counter-box">
                    <div className={`inline-flex p-3 rounded-xl ${stat.color} mb-4`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                    />
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </BounceIn>
              ))}
            </div>
          </div>

          {/* Right - Features */}
          <FadeIn direction="right" delay={0.3}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                What Makes Us Different
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
