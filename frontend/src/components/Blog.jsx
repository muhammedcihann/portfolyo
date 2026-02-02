import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/mock';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className={`container mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Insights on systems engineering, middleware technologies, and tech leadership
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.blogPosts.map((post) => (
              <a key={post.id} href={post.url || '#'} target="_blank" rel="noopener noreferrer" className="block group">
                <Card
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-2"
                >
                  {/* Post Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white shadow-lg">
                        New
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-300 mt-auto pt-2">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
