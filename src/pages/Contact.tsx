import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, SlideIn } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
                  Contact Us
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Get in Touch With Us
                </h1>
                <p className="text-lg text-white/80">
                  Have questions or need to schedule an appointment? We're here to help. 
                  Reach out to us through any of the channels below.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 -mt-24 relative z-20">
              {[
                { icon: Phone, title: 'Phone', info: '+1 (234) 567-890', subInfo: 'Mon-Sat 8AM-8PM' },
                { icon: Mail, title: 'Email', info: 'info@medcare.com', subInfo: 'Online support 24/7' },
                { icon: MapPin, title: 'Location', info: '123 Medical Center Dr', subInfo: 'Healthcare City, HC 12345' },
                { icon: Clock, title: 'Working Hours', info: 'Mon - Sat: 8AM - 8PM', subInfo: 'Emergency: 24/7' },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-card rounded-2xl p-6 shadow-card text-center"
                    whileHover={{ y: -8 }}
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground font-medium">{item.info}</p>
                    <p className="text-muted-foreground text-sm">{item.subInfo}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <SlideIn direction="left">
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <h2 className="text-3xl font-serif font-bold mb-6">Send us a Message</h2>
                  
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
                        <Input placeholder="Your Name" required className="h-12" />
                        <Input type="email" placeholder="Email Address" required className="h-12" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input type="tel" placeholder="Phone Number" className="h-12" />
                        <Input placeholder="Subject" className="h-12" />
                      </div>
                      <Textarea
                        placeholder="Your Message..."
                        rows={5}
                        className="resize-none"
                        required
                      />
                      <Button type="submit" className="w-full btn-hero" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </SlideIn>

              {/* Map */}
              <SlideIn direction="right">
                <div className="bg-card rounded-3xl overflow-hidden shadow-card h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1644262070817!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hospital Location"
                  />
                </div>
              </SlideIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
