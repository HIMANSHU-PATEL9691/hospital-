import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    title: 'Hospital Lobby',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
    title: 'Patient Room',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop',
    title: 'Operating Theater',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop',
    title: 'Laboratory',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    title: 'Medical Equipment',
    category: 'Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
    title: 'MRI Scanner',
    category: 'Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    title: 'Pharmacy',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=600&fit=crop',
    title: 'ICU',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
    title: 'Reception Area',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    title: 'Private Suite',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
    title: 'Waiting Area',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    title: 'Medical Team',
    category: 'Staff',
  },
];

const categories = ['All', 'Facilities', 'Rooms', 'Equipment', 'Staff'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

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
                  Gallery
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Tour Our Facilities
                </h1>
                <p className="text-lg text-white/80">
                  Take a virtual tour of our state-of-the-art hospital facilities, 
                  patient rooms, and medical equipment.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" staggerDelay={0.05}>
              {filteredImages.map((image, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold">{image.title}</h3>
                      <p className="text-white/70 text-sm">{image.category}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-3 bg-white rounded-full text-primary">
                        <ZoomIn className="h-6 w-6" />
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-4 right-4 p-2 bg-white rounded-full text-foreground hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </motion.button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-4 text-center text-white">
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                  <p className="text-white/70">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
