import React, { useEffect } from 'react';
import { Command } from 'cmdk';
import {
  Home,
  User,
  Briefcase,
  Code,
  Book,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  FileText
} from 'lucide-react';
import { portfolioData } from '@/mock';

const CommandMenu = ({ open, setOpen, toggleTheme, openCVModal }) => {
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const openLink = (url) => {
    // This function is now only for external links
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Navigation">
          <Command.Item onSelect={() => scrollToSection('#home')}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </Command.Item>
          <Command.Item onSelect={() => scrollToSection('#about')}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </Command.Item>
          <Command.Item onSelect={() => scrollToSection('#experience')}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Experience</span>
          </Command.Item>
          <Command.Item onSelect={() => scrollToSection('#skills')}>
            <Code className="mr-2 h-4 w-4" />
            <span>Skills</span>
          </Command.Item>
          <Command.Item onSelect={() => scrollToSection('#projects')}>
            <Book className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </Command.Item>
          <Command.Item onSelect={() => scrollToSection('#contact')}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Actions">
          <Command.Item onSelect={toggleTheme}>
            <Sun className="mr-2 h-4 w-4 dark:hidden" />
            <Moon className="mr-2 h-4 w-4 hidden dark:inline-block" />
            <span>Toggle Theme</span>
          </Command.Item>
          <Command.Item onSelect={openCVModal}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Request CV</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Links">
          <Command.Item onSelect={() => openLink(`https://github.com/${portfolioData.personal.github}`)}>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </Command.Item>
          <Command.Item onSelect={() => openLink(`https://${portfolioData.personal.linkedin}`)}>
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandMenu;