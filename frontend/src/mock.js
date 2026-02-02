export const portfolioData = {
  personal: {
    name: "Muhammed Cihan",
    title: "System Engineer Assistant",
    tagline: "Building Scalable Systems & Leading Innovation",
    location: "Istanbul, Turkiye",
    email: "muhammed.cihan@hotmail.com",
    phone: "+90 (535) 065 95 95",
    linkedin: "linkedin.com/in/muhammedcihan",
    photo: "https://customer-assets.emergentagent.com/job_3b8264cf-fdb2-4ed5-b6df-ff18973d4669/artifacts/j33y9sp8_WhatsApp%20Image%202025-12-18%20at%2021.13.52_de4e3095.jpg",
    bio: "As a systems engineer assistant at Garanti BBVA Technology, I support critical infrastructure and middleware operations across production environments. Currently completing my Computer Engineering degree at Dogus University, where I founded the first hackathon team and served as Chairman of the Mühendis Beyinler Club. I'm passionate about systems architecture, middleware technologies, and building communities that foster technical excellence."
  },

  experience: [
    {
      id: 1,
      company: "Garanti BBVA Technology",
      position: "System Engineer Assistant",
      duration: "Jun 2023 - Present",
      location: "Istanbul, Turkiye",
      description: "Supporting infrastructure and middleware operations across production and non-production environments, focusing on IBM CICS, IBM MQ, and system monitoring.",
      highlights: [
        "Created initial definitions for CICS environment systems",
        "Performed process monitoring, error handling, and configuration on IBM CICS",
        "Worked with queue and channel structures on IBM MQ, monitoring message flows",
        "Monitored system performance using OMEGAMON tools",
        "Generated internal reports from daily log data using SSRS",
        "Collaborated with cross-functional teams to resolve system issues",
        "Wrote JCL scripts to initiate and monitor batch jobs"
      ],
      technologies: ["IBM CICS", "IBM MQ", "OMEGAMON", "SSRS", "JCL", "MS SQL"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Engineering",
      school: "Dogus University",
      duration: "Sep 2021 - Jun 2026 (Expected)",
      location: "Istanbul, Turkiye",
      description: "Completed a one-year English preparatory program prior to undergraduate studies. Gained core knowledge in systems engineering and software development.",
      achievements: [
        "Founded and led the university's first hackathon/ideathon team",
        "Served as Chairman of the Mühendis Beyinler Club",
        "Organized technical events, workshops, and seminars",
        "Oversaw student engagement and operations"
      ]
    }
  ],

  skills: [
    {
      category: "Middleware & Systems",
      items: [
        { name: "IBM CICS", level: 75 },
        { name: "IBM MQ", level: 75 },
        { name: "RabbitMQ", level: 50 },
        { name: "OMEGAMON", level: 70 }
      ]
    },
    {
      category: "Programming & Scripting",
      items: [
        { name: "Java", level: 65 },
        { name: "JCL", level: 60 },
        { name: "SQL", level: 70 },
        { name: "Python", level: 55 }
      ]
    },
    {
      category: "Databases & Reporting",
      items: [
        { name: "MS SQL", level: 70 },
        { name: "SSRS", level: 65 },
        { name: "MongoDB", level: 50 }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "IBM z/OS", level: 60 },
        { name: "Git", level: 70 },
        { name: "Linux", level: 60 }
      ]
    }
  ],

  certifications: [
    "IBM z/OS Introduction",
    "SQL Server",
    "IT Service Management",
    "Java Basics"
  ],

  projects: [
    {
      id: 1,
      title: "Middleware Monitoring Dashboard",
      description: "Developed an internal monitoring dashboard for tracking IBM MQ message flows and queue health metrics in real-time.",
      technologies: ["IBM MQ", "SSRS", "MS SQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "University Hackathon Platform",
      description: "Founded and organized the university's first hackathon, creating a platform for students to collaborate on innovative tech projects.",
      technologies: ["Leadership", "Event Management", "Community Building"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Automated JCL Job Scheduler",
      description: "Created automated JCL scripts for batch job scheduling and monitoring, reducing manual intervention by 40%.",
      technologies: ["JCL", "IBM z/OS", "Automation"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "CICS Performance Analyzer",
      description: "Built performance analysis tools for CICS transaction monitoring and optimization.",
      technologies: ["IBM CICS", "OMEGAMON", "Performance Testing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "Understanding IBM CICS: A Beginner's Guide",
      excerpt: "An introduction to IBM CICS and how it powers enterprise transaction processing in modern banking systems.",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Building a Hackathon Culture in Universities",
      excerpt: "Lessons learned from founding and organizing the first hackathon team at Dogus University.",
      date: "2025-01-10",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "IBM MQ Message Flow Optimization",
      excerpt: "Best practices for optimizing message queue performance and resolving common MQ issues.",
      date: "2025-01-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    }
  ],

  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Upper Intermediate" }
  ],

  softSkills: [
    "Team Management",
    "Cross-functional Communication",
    "Event Moderation",
    "Problem-solving",
    "Leadership"
  ]
};
