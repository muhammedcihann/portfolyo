import React from 'react';
import { Linkedin, Mail, Github, Code } from 'lucide-react';
import { portfolioData } from '@/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: `https://github.com/${portfolioData.personal.github}`,
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: `https://${portfolioData.personal.linkedin}`,
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${portfolioData.personal.email}`,
      label: 'Email'
    }
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* Quick Links */}
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-full bg-blue-800 hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
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
