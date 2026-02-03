import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { FadeIn } from '@/components/animations';
import { Button } from '@/components/ui/button';

const blogPostData = {
  id: 1,
  title: '10 Essential Tips for a Healthy Heart',
  excerpt: 'Discover the key lifestyle changes and habits that can significantly improve your cardiovascular health.',
  image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
  category: 'Health Tips',
  author: 'Dr. Sarah Johnson',
  authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
  date: 'January 15, 2024',
  readTime: '5 min read',
  content: `
    <p class="lead">Heart disease remains one of the leading causes of death worldwide, but the good news is that many heart conditions are preventable. By making simple lifestyle changes, you can significantly reduce your risk and improve your overall cardiovascular health.</p>

    <h2>1. Maintain a Healthy Diet</h2>
    <p>A heart-healthy diet is rich in fruits, vegetables, whole grains, and lean proteins. Limit your intake of saturated fats, trans fats, and sodium. Consider the Mediterranean diet, which has been shown to reduce heart disease risk.</p>

    <h2>2. Exercise Regularly</h2>
    <p>Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week. Regular exercise helps maintain a healthy weight, reduces blood pressure, and improves cholesterol levels.</p>

    <h2>3. Quit Smoking</h2>
    <p>Smoking is one of the most significant risk factors for heart disease. Quitting smoking can rapidly improve your heart health and reduce your risk of heart attack.</p>

    <h2>4. Manage Stress</h2>
    <p>Chronic stress can contribute to heart disease. Practice stress-reduction techniques such as meditation, yoga, or deep breathing exercises to keep your stress levels in check.</p>

    <h2>5. Get Enough Sleep</h2>
    <p>Poor sleep quality is linked to higher blood pressure and increased risk of heart disease. Aim for 7-9 hours of quality sleep each night.</p>

    <h2>6. Monitor Your Blood Pressure</h2>
    <p>High blood pressure is a major risk factor for heart disease. Have your blood pressure checked regularly and take steps to keep it within a healthy range.</p>

    <h2>7. Control Cholesterol Levels</h2>
    <p>High cholesterol can lead to plaque buildup in your arteries. Know your numbers and work with your doctor to maintain healthy cholesterol levels through diet, exercise, and medication if necessary.</p>

    <h2>8. Maintain a Healthy Weight</h2>
    <p>Being overweight or obese increases your risk of heart disease. Even a small amount of weight loss can have significant benefits for your heart health.</p>

    <h2>9. Limit Alcohol Consumption</h2>
    <p>Excessive alcohol intake can raise blood pressure and contribute to heart disease. If you drink, do so in moderation.</p>

    <h2>10. Schedule Regular Checkups</h2>
    <p>Regular health screenings can help detect heart disease risk factors early. Work with your healthcare provider to monitor your heart health and address any concerns promptly.</p>

    <h2>Conclusion</h2>
    <p>Taking care of your heart doesn't have to be complicated. By incorporating these simple tips into your daily routine, you can significantly improve your cardiovascular health and reduce your risk of heart disease. Remember, it's never too late to start making heart-healthy choices.</p>
  `,
};

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={blogPostData.image}
            alt={blogPostData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <FadeIn>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {blogPostData.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 max-w-4xl">
                  {blogPostData.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <span className="flex items-center gap-2">
                    <img
                      src={blogPostData.authorImage}
                      alt={blogPostData.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {blogPostData.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {blogPostData.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPostData.readTime}
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <article
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: blogPostData.content }}
                />
              </FadeIn>

              {/* Share */}
              <FadeIn delay={0.2}>
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Tags:</span>
                      <span className="bg-muted px-3 py-1 rounded-full text-sm">{blogPostData.category}</span>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
