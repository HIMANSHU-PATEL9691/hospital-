import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What are your hospital visiting hours?',
        a: 'Our general visiting hours are from 10:00 AM to 8:00 PM daily. ICU visiting hours are limited to 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM. Please check with specific departments for any variations.',
      },
      {
        q: 'How do I make an appointment?',
        a: 'You can book an appointment through our online booking system, by calling our appointment line at +1 (234) 567-890, or by visiting our reception desk in person. We recommend booking in advance for specialist consultations.',
      },
      {
        q: 'What insurance plans do you accept?',
        a: 'We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, United Healthcare, and Medicare. Please contact our billing department for specific coverage information.',
      },
      {
        q: 'Do you offer emergency services?',
        a: 'Yes, our Emergency Department operates 24/7 with experienced emergency physicians and state-of-the-art equipment to handle all medical emergencies.',
      },
    ],
  },
  {
    category: 'Appointments & Billing',
    questions: [
      {
        q: 'How can I cancel or reschedule my appointment?',
        a: 'You can cancel or reschedule your appointment by calling our appointment line at least 24 hours before your scheduled visit. Online appointments can also be modified through our patient portal.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and personal checks. We also offer payment plans for larger bills.',
      },
      {
        q: 'How can I get my medical bills explained?',
        a: 'Our billing department is available to explain your bills in detail. You can call our billing helpline or visit our billing office during business hours. Itemized bills are available upon request.',
      },
    ],
  },
  {
    category: 'Medical Records',
    questions: [
      {
        q: 'How can I access my medical records?',
        a: 'You can access your medical records through our secure patient portal. You can also request physical copies by submitting a request form at our medical records department. Please allow 3-5 business days for processing.',
      },
      {
        q: 'How do I transfer my medical records to another hospital?',
        a: 'Submit a written request at our medical records department with details of the receiving facility. We will securely transfer your records within 7-10 business days.',
      },
    ],
  },
  {
    category: 'Services & Facilities',
    questions: [
      {
        q: 'Do you have parking facilities?',
        a: 'Yes, we have ample parking available for patients and visitors. Valet parking is also available at the main entrance. Parking validation is provided for appointments.',
      },
      {
        q: 'Is there a cafeteria or food service available?',
        a: 'Our hospital cafeteria is open from 7:00 AM to 9:00 PM daily, offering a variety of healthy meal options. There are also vending machines available 24/7.',
      },
      {
        q: 'Do you provide interpreter services?',
        a: 'Yes, we offer interpreter services for patients who speak languages other than English. Please request this service when booking your appointment.',
      },
    ],
  },
];

const FAQ = () => {
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
                  FAQ
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-white/80">
                  Find answers to common questions about our services, appointments, billing, and more.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <FadeIn key={catIndex} delay={catIndex * 0.1}>
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                      <HelpCircle className="h-6 w-6 text-primary" />
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`${catIndex}-${index}`}
                          className="bg-card rounded-2xl shadow-card border-none px-6"
                        >
                          <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-5">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center max-w-3xl mx-auto">
                <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                  <a
                    href="mailto:info@medcare.com"
                    className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted/80 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us
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

export default FAQ;
