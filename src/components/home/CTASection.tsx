import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn } from '@/components/animations';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after showing success
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <SlideIn direction="left">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ready to Take the First Step to Better Health?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Schedule your appointment today and experience healthcare that puts you first. 
                Our team is ready to provide the care you deserve.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Emergency Line</p>
                    <a href="tel:+1234567890" className="text-xl font-semibold hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-lg">123 Medical Center Drive, HC 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Working Hours</p>
                    <p className="text-lg">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Right - Contact Form */}
          <FadeIn delay={0.3}>
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Book an Appointment
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-success mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">We'll contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="h-12"
                    />
                    <Input
                      type="date"
                      placeholder="Preferred Date"
                      className="h-12"
                    />
                  </div>
                  <Textarea
                    placeholder="Describe your symptoms or reason for visit..."
                    rows={4}
                    className="resize-none"
                  />
                  <Button
                    type="submit"
                    className="w-full btn-hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Book Appointment
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
