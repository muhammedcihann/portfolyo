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
    bio: "I am a senior computer engineering student and a System Engineer Assistant at Garanti BBVA Technology, where I focus on mainframe, middleware, and infrastructure systems. Specializing in CICS and MQ, I have gained hands-on experience in transaction management, message queue systems, and complex integration processes. My work involves developing scalable infrastructure solutions to ensure enterprise-level reliability and performance. I am continuously enhancing my expertise in infrastructure and mainframe technologies and am always open to exploring new technologies and professional collaborations.",
    cvUrl: "/MuhammedCihan_CV_3.pdf"
  },

  experience: [
    {
      id: 1,
      company: "Garanti BBVA Technology",
      position: "Z Cloud Middleware And Communication Services Engineer Assistant",
      duration: "Sep 2023 - Present",
      location: "Istanbul, Turkiye",
      description: "I have been working as a Middleware and Communication Services Engineer Assistant, mainly focusing on mainframe and middleware technologies within critical banking systems. My responsibilities include maintaining middleware environments, resolving issues, preparing reports, and collaborating with teams to ensure reliable and secure communication services.",
      highlights: [
        "Gained hands-on experience with CICS, IBM MQ, and RabbitMQ by configuring queues and defining transactions.",
        "Involved in automation and process optimization on z/OS using JCL and REXX.",
        "Designed and prepared reports and dashboards with SSRS for business decision-making.",
        "Supported application integration across various systems."
      ],
      technologies: ["CICS", "IBM MQ", "RabbitMQ", "z/OS", "JCL", "REXX", "SSRS"]
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
      category: "Middleware & Mainframe",
      items: [
        { name: "IBM CICS" },
        { name: "IBM MQ" },
        { name: "Rabbit MQ" },
        { name: "z/OS" },
        { name: "OMEGAMON" },
        { name: "JCL" },
        { name: "REXX" }

      ]
    },
    {
      category: "Programming & Databases",
      items: [
        { name: "Java" },
        { name: "SQL" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "MS SQL Server" },
        { name: "SSRS" },
        { name: "Qlik" }
      ]
    },
    {
      category: "Web & Version Control",
      items: [
        { name: "React" },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS" },
        { name: "Git" }
      ]
    }
  ],

  certifications: [
    "SQL ile Veritabanı Sorgulama (101 & 201)",
    "Getting Started on Mainframe with z/OS",
    "IT Support for a Hybrid Workforce",
    "Leadership Communication",
    "Microsoft Azure Fundamentals (AZ-900)",
    "English Preparatory Programme (B2)",
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
    { name: "English", level: "Upper Intermediate" },
    { name: "Spanish", level: "Beginner" }
  ],

  softSkills: [
    "Team Management",
    "Cross-functional Communication",
    "Problem-solving",
    "Leadership"
  ],

  chatbot: {
    greeting: "Hey there! I'm a bot assistant for Muhammed. Ask me anything about his skills, experience, or projects. Try asking 'What are his skills?' or 'Tell me about his experience'.",
    suggestedQuestions: [
      "What are his skills?",
      "Tell me about his experience",
      "What projects has he worked on?",
      "How can I contact him?"
    ],
    knowledgeBase: [
      {
        keywords: ["hello", "hi", "hey", "selam"],
        answer: "Hello! How can I help you learn more about Muhammed?"
      },
      {
        keywords: ["who", "bot", "assistant", "you"],
        answer: "I'm a bot assistant created to help you learn about Muhammed. You can ask me about his skills, experience, and more!"
      },
      {
        keywords: ["skill", "skills", "technical", "technologies", "yetenek"],
        answer: "Muhammed is skilled in Mainframe technologies like CICS, MQ, and z/OS, Programming with Java, SQL, and Python, and Web technologies like React. You can see the full list in the [Skills section](#skills)!"
      },
      {
        keywords: ["experience", "work", "job", "garanti", "deneyim", "iş"],
        answer: "He works as a Z Cloud Middleware And Communication Services Engineer Assistant at Garanti BBVA Technology, focusing on mainframe and middleware systems. Check out the [Experience section](#experience) for more details."
      },
      {
        keywords: ["project", "projects", "proje"],
        answer: "He has worked on several projects, including a Middleware Monitoring Dashboard. You can find more in the [Projects section](#projects)."
      },
      {
        keywords: ["education", "university", "school", "eğitim", "okul"],
        answer: "Muhammed is a senior Computer Engineering student at Dogus University. He's also been active in leadership roles, like founding the university's first hackathon team."
      },
      {
        keywords: ["contact", "email", "linkedin", "iletişim", "reach", "connect", "him"],
        answer: "You can get in touch with Muhammed via the [contact form](#contact) on this page, or through his LinkedIn profile. All links are in the footer!"
      },
      {
        keywords: ["cv", "resume"],
        answer: "You can download Muhammed's CV using the 'Download CV' button in the top section or by using the command menu (Cmd+K)."
      },
      {
        keywords: ["thank", "thanks", "teşekkür"],
        answer: "You're welcome! Is there anything else I can help you with?"
      },
      {
        keywords: ["bye", "goodbye"],
        answer: "Goodbye! Have a great day."
      }
    ],
    fallback: "I'm not sure how to answer that. Try asking about his skills, experience, or projects. You can also use the main navigation or the command menu (Cmd+K) to explore the site."
  }
};
