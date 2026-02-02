import React from 'react';
import { Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { portfolioData } from '@/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: `https://${portfolioData.personal.linkedin}`,
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${portfolioData.personal.email}`,
      label: 'Email'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: `tel:${portfolioData.personal.phone}`,
      label: 'Phone'
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              System Engineer Assistant passionate about building scalable systems and fostering technical communities.
            </p>
            <div className="flex space-x-4">
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
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                {portfolioData.personal.email}
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                {portfolioData.personal.phone}
              </p>
              <p className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-blue-400" />
                {portfolioData.personal.linkedin}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-2 text-red-500 fill-current" /> in Istanbul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
