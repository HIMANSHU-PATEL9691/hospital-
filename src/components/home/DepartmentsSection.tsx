import { motion } from 'framer-motion';
import { Heart, Brain, Bone, Baby, Eye, Pill, Activity, Stethoscope, Syringe, Microscope, Scan, Thermometer } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, BounceIn } from '@/components/animations';

const departments = [
  { icon: Heart, name: 'Cardiology', color: 'bg-red-500' },
  { icon: Brain, name: 'Neurology', color: 'bg-purple-500' },
  { icon: Bone, name: 'Orthopedics', color: 'bg-blue-500' },
  { icon: Baby, name: 'Pediatrics', color: 'bg-pink-500' },
  { icon: Eye, name: 'Ophthalmology', color: 'bg-cyan-500' },
  { icon: Pill, name: 'Pharmacy', color: 'bg-green-500' },
  { icon: Activity, name: 'Emergency', color: 'bg-orange-500' },
  { icon: Stethoscope, name: 'General Medicine', color: 'bg-teal-500' },
  { icon: Syringe, name: 'Vaccination', color: 'bg-indigo-500' },
  { icon: Microscope, name: 'Laboratory', color: 'bg-amber-500' },
  { icon: Scan, name: 'Radiology', color: 'bg-slate-500' },
  { icon: Thermometer, name: 'Intensive Care', color: 'bg-rose-500' },
];

const DepartmentsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Departments
            </span>
            <h2 className="section-title">
              Our <span className="gradient-text">Medical Departments</span>
            </h2>
            <p className="section-subtitle">
              Explore our specialized departments equipped with modern facilities 
              and staffed by expert medical professionals.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6" staggerDelay={0.05}>
          {departments.map((dept, index) => (
            <StaggerItem key={index}>
              <motion.a
                href="/departments"
                className="group flex flex-col items-center p-4 md:p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className={`p-4 rounded-2xl ${dept.color} text-white mb-4 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <dept.icon className="h-6 w-6 md:h-8 md:w-8" />
                </motion.div>
                <span className="text-sm md:text-base font-medium text-center">{dept.name}</span>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DepartmentsSection;
