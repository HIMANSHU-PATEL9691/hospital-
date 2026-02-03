import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Health Tips', 'Medical News', 'Nutrition', 'Mental Health', 'Research'];

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for a Healthy Heart',
    excerpt: 'Discover the key lifestyle changes and habits that can significantly improve your cardiovascular health and reduce the risk of heart disease.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop',
    category: 'Health Tips',
    author: 'Dr. Sarah Johnson',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding the New COVID-19 Variants',
    excerpt: 'A comprehensive guide to the latest COVID-19 variants, their symptoms, and what you need to know to stay protected.',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop',
    category: 'Medical News',
    author: 'Dr. Michael Chen',
    date: 'Jan 12, 2024',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'The Role of Nutrition in Disease Prevention',
    excerpt: 'Learn how proper nutrition can be your first line of defense against various chronic diseases and improve overall well-being.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
    category: 'Nutrition',
    author: 'Dr. Emily Williams',
    date: 'Jan 10, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Managing Stress in the Modern World',
    excerpt: 'Practical strategies and techniques for managing stress and maintaining mental wellness in today\'s fast-paced environment.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    category: 'Mental Health',
    author: 'Dr. Amanda Foster',
    date: 'Jan 8, 2024',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Breakthrough in Cancer Research',
    excerpt: 'New developments in immunotherapy are showing promising results in the treatment of various types of cancer.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop',
    category: 'Research',
    author: 'Dr. Robert Kim',
    date: 'Jan 5, 2024',
    readTime: '10 min read',
  },
  {
    id: 6,
    title: 'Sleep: The Foundation of Good Health',
    excerpt: 'Understanding the importance of quality sleep and its impact on physical health, mental clarity, and immune function.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=500&fit=crop',
    category: 'Health Tips',
    author: 'Dr. Lisa Martinez',
    date: 'Jan 3, 2024',
    readTime: '5 min read',
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

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
                  Our Blog
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                  Health Insights & Medical Updates
                </h1>
                <p className="text-lg text-white/80">
                  Stay informed with the latest health tips, medical news, and wellness advice from our expert team.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Tag className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className="flex-shrink-0"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <motion.article
                    className="bg-card rounded-2xl overflow-hidden shadow-card h-full flex flex-col"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="flex items-center gap-2 text-sm">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
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

export default Blog;
