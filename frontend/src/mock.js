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
    bio: "As a systems engineer assistant at Garanti BBVA Technology, I support critical infrastructure and middleware operations across production environments. Currently completing my Computer Engineering degree at Dogus University, where I founded the first hackathon team and served as Chairman of the Mühendis Beyinler Club."
  },

  experience: [
    {
      id: 1,
      company: "Garanti BBVA Technology",
      position: "System Engineer Assistant",
      duration: "Jun 2023 - Present",
      location: "Istanbul, Turkiye",
      description: "Supporting infrastructure and middleware operations across production and non-production environments.",
      highlights: [
        "Created initial definitions for CICS environment systems",
        "Performed process monitoring and error handling on IBM CICS",
        "Worked with IBM MQ queue structures and message flows",
        "Generated internal reports using SSRS"
      ],
      technologies: ["IBM CICS", "IBM MQ", "OMEGAMON", "SSRS", "JCL"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Engineering",
      school: "Dogus University",
      duration: "Sep 2021 - Jun 2026",
      location: "Istanbul, Turkiye",
      description: "Completed one-year English preparatory program. Gained core knowledge in systems engineering and software development.",
      achievements: [
        "Founded university's first hackathon team",
        "Served as Chairman of Mühendis Beyinler Club",
        "Organized technical events and workshops"
      ]
    }
  ],

  skills: [
    {
      category: "Middleware & Systems",
      items: [
        { name: "IBM CICS", level: 75 },
        { name: "IBM MQ", level: 75 },
        { name: "OMEGAMON", level: 70 }
      ]
    },
    {
      category: "Programming",
      items: [
        { name: "Java", level: 65 },
        { name: "SQL", level: 70 },
        { name: "Python", level: 55 }
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
      description: "Developed internal monitoring dashboard for IBM MQ message flows and queue health metrics.",
      technologies: ["IBM MQ", "SSRS", "MS SQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "University Hackathon Platform",
      description: "Founded and organized university's first hackathon event.",
      technologies: ["Leadership", "Community Building"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
    }
  ],

  blogPosts: [
    {
      id: 1,
      title: "Understanding IBM CICS",
      excerpt: "An introduction to IBM CICS and enterprise transaction processing.",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    }
  ],

  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Upper Intermediate" }
  ],

  softSkills: [
    "Team Management",
    "Cross-functional Communication",
    "Problem-solving",
    "Leadership"
  ]
};
