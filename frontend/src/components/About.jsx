import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/mock';

const About = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <Card className={`mb-8 border-none shadow-lg hover:shadow-xl transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <Card className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 ease-out delay-300 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  2+ Years
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Experience
                </p>
              </CardContent>
            </Card>

            <Card className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 ease-out delay-400 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Computer Eng.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Education
                </p>
              </CardContent>
            </Card>

            <Card className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 ease-out delay-500 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {portfolioData.personal.location}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Location
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 ">
            <Card className={`border-none shadow-lg transition-all duration-500 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Languages
                </h3>
                <div className="space-y-3">
                  {portfolioData.languages && portfolioData.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {lang.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`border-none shadow-lg transition-all duration-500 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  {portfolioData.certifications && portfolioData.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      {cert}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
