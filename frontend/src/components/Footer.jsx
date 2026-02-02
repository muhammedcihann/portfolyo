import React from 'react';
import { Linkedin, Mail, Github, Code } from 'lucide-react';
import { portfolioData } from '@/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Logo/Name */}
        <h3 className="text-3xl font-bold text-blue-400 mb-4">
          {portfolioData.personal.name}
        </h3>
        <p className="text-gray-300 leading-relaxed max-w-xl mx-auto mb-8">
          System Engineer Assistant passionate about building scalable systems and fostering technical communities.
        </p>

        {/* Contact Info */}
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-12 font-medium">
          <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
            <Mail className="h-5 w-5 mr-2" />
            {portfolioData.personal.email}
          </a>
          <a href={`https://github.com/${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
          <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Crafted with <Code className="h-4 w-4 mx-2 text-blue-400" /> and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
