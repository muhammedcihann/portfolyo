import React, { useState, useEffect } from 'react';
import { ArrowDown, Linkedin, Mail, FileText, Github, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/mock';

const Hero = ({ openCVModal }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = portfolioData.personal.tagline;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200);
    return () => clearTimeout(timeout);
  }, []);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className={`text-blue-600 dark:text-blue-400 font-medium text-lg transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Hello, I'm
              </p>
              <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-700 delay-150 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {portfolioData.personal.name}
              </h1>
              <h2 className={`text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 transition-all duration-700 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {portfolioData.personal.title}
              </h2>
            </div>

            {/* Typing Effect */}
            <div className={`h-16 flex items-center transition-all duration-700 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                {displayText}
                {!isTypingComplete && (
                  <span className="inline-block w-0.5 h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse"></span>
                )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-[600ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={openCVModal}
              >
                <FileText className="mr-2 h-5 w-5" />
                Request CV
              </Button>
            </div>

            {/* Social Links */}
            <div className={`flex items-center space-x-4 pt-4 transition-all duration-700 delay-[750ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={`https://github.com/${portfolioData.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`https://${portfolioData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-3 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center items-center">
            <div className={`relative group transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-slate-700 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                <img
                  src={portfolioData.personal.photo}
                  alt={portfolioData.personal.name}
                  className="w-full h-auto max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce cursor-pointer"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
