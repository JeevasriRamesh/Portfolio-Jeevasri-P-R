
export interface Project {
  id: string;
  episodeNumber: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  detailedDescription?: {
    problem?: string;
    dataset?: string;
    process?: string;
    analysis?: string;
    outcome?: string;
  };
  coverImage?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  prize: string;
  project: string;
  institution: string;
  date?: string;
  coverImage?: string;
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  doi: string;
  year: string;
  coverImage?: string;
}

export interface Season {
  id: string;
  seasonNumber: string;
  title: string;
  period: string;
  description: string;
  details?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export const portfolioData = {
  name: "JEEVASRI P R",
  subtitle: "IT Graduate • Data Analytics • Technology • Research",
  tagline: "Turning data, technology and ideas into meaningful solutions.",
  role: "",
  location: "Madurai, Tamil Nadu, India",
  email: "jeevasripr@gmail.com",
  phone: "+91 9629321962",

  continueExploring: [
    {
      episodeNumber: "01",
      title: "The Beginning",
      category: "Education",
      description: "B.Tech Information Technology journey at Velammal College",
      section: "journey",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
    },
    {
      episodeNumber: "02",
      title: "First Builds",
      category: "Projects",
      description: "Early projects and skill development",
      section: "projects",
      coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop",
    },
    {
      episodeNumber: "03",
      title: "Into Data",
      category: "Data Analytics",
      description: "LinkedIn Job Market Analysis Dashboard",
      section: "projects",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    },
    {
      episodeNumber: "04",
      title: "Research",
      category: "Publications",
      description: "IEEE publications and academic research",
      section: "research",
      coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop",
    },
    {
      episodeNumber: "05",
      title: "The Hackathon",
      category: "Achievements",
      description: "Smart Helmet System innovations",
      section: "achievements",
      coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    },
  ],

  seasons: [
    {
      id: "season-1",
      seasonNumber: "SEASON 1",
      title: "FOUNDATION",
      period: "November 2022 – May 2026",
      description: "Velammal College of Engineering and Technology",
      details: [
        "B.Tech Information Technology",
        "CGPA: 8.17/10",
      ],
    },
    {
      id: "season-2",
      seasonNumber: "SEASON 2",
      title: "EXPERIENCE",
      period: "December 2023 – January 2024",
      description: "NSIC — Android Application Development Intern",
      details: [
        "Developed Android applications using Android Studio",
        "Assisted in identifying system issues and debugging applications",
        "Participated in testing, optimization and implementation improvements",
      ],
    },
    {
      id: "season-3",
      seasonNumber: "SEASON 3",
      title: "BUILDING",
      period: "2024 – Present",
      description: "Featured Projects",
      details: [
        "LinkedIn Job Market Analysis Dashboard",
        "TNOpportune - Government Scheme Finder",
        "Skill Barter - Skill Exchange Platform",
        "VELORA - Fashion Shopping App Prototype",
      ],
    },
    {
      id: "season-4",
      seasonNumber: "SEASON 4",
      title: "RESEARCH",
      period: "2025 – 2026",
      description: "IEEE Publications",
      details: [
        "Enhancing Cancer Classification in Genomic Data",
        "TNOpportune Research Paper",
        "Predictive Analysis Using Industrial Equipments",
      ],
    },
    {
      id: "season-5",
      seasonNumber: "SEASON 5",
      title: "ACHIEVEMENTS",
      period: "2025",
      description: "Smart Helmet System Recognition",
      details: [
        "Second Prize - Idea Presentation Competition",
        "Finalist - Uyir Road Safety Hackathon 2025",
      ],
    },
    {
      id: "season-6",
      seasonNumber: "SEASON 6",
      title: "WHAT'S NEXT?",
      period: "Future",
      description: "Career Direction",
      details: [
        "Data Analytics",
        "Business Intelligence",
        "Technology",
        "AI / Emerging Technologies",
        "SAP",
      ],
    },
  ],

  projects: [
    {
      id: "linkedin-analysis",
      episodeNumber: "01",
      title: "LinkedIn Job Market Analysis Dashboard",
      category: "Data Analytics",
      description: "Comprehensive analysis of LinkedIn job postings using Python, SQL, and Power BI to identify market trends and skill demands",
      fullDescription: "An in-depth data analytics project analyzing thousands of LinkedIn job postings to uncover insights about the technology job market, including trending skills, salary distributions, geographic opportunities, and emerging technology requirements. The project involved extensive data cleaning, preprocessing, and visualization to create an interactive Power BI dashboard.",
      technologies: [
        "Python",
        "Pandas",
        "SQL",
        "Power BI",
        "Data Cleaning",
        "Data Preprocessing",
        "Data Analysis",
        "Data Visualization",
      ],
      detailedDescription: {
        problem: "Understanding job market trends and skill requirements from real-world LinkedIn job postings data to help job seekers make informed career decisions",
        dataset: "LinkedIn job postings dataset with thousands of entries containing job titles, required skills, locations, salary ranges, and company information",
        process: "Performed comprehensive data cleaning including handling missing values, removing duplicates, standardizing inconsistent data fields, and normalizing text data. Applied feature engineering to extract meaningful insights from job descriptions and requirements.",
        analysis: "Conducted statistical analysis to identify top in-demand programming languages, frameworks, and tools. Analyzed salary trends across different roles and locations. Examined the correlation between skills and salary ranges.",
        outcome: "Created an interactive Power BI dashboard with connected visualizations that enables users to explore job market data dynamically. The dashboard provides actionable insights for career planning and skill development.",
      },
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      links: {
        github: "https://github.com/JeevasriRamesh/LinkedIn-Job-Market-Analysis-Dashboard",
        demo: "https://linkedin-job-market-analysis-dashboard.onrender.com/",
      },
    },
    {
      id: "tnopportune",
      episodeNumber: "02",
      title: "TNOpportune",
      category: "Web Development",
      description: "Personalized eligibility-based job and TN.Govt scheme finder web application using MongoDB and Node.js",
      fullDescription: "A comprehensive web application that analyzes user eligibility data such as age, education, income, and community to recommend relevant government schemes and job opportunities. The platform features intelligent filtering algorithms and a user-friendly interface to help citizens discover government benefits they qualify for.",
      technologies: [
        "MongoDB",
        "Node.js",
        "JavaScript",
        "Express.js",
        "Web Development",
        "Eligibility Filtering",
        "Recommendation Logic",
      ],
      detailedDescription: {
        problem: "Citizens face significant challenges in discovering government schemes and job opportunities they're eligible for due to fragmented information across multiple government websites and complex eligibility criteria",
        process: "Developed a centralized database of government schemes and job opportunities with structured eligibility criteria. Built intelligent filtering algorithms that match user profiles against scheme requirements. Created an intuitive web interface for easy data input and result display.",
        outcome: "Launched a user-friendly platform that has helped citizens discover relevant government opportunities. The system provides personalized recommendations based on comprehensive eligibility analysis.",
      },
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
      links: {
        github: "https://github.com/JeevasriRamesh/TN-OPPORTUNE",
        demo: "https://tn-opportune-2.onrender.com/login.html",
      },
    },
    {
      id: "skill-barter",
      episodeNumber: "03",
      title: "Skill Barter",
      category: "Web Platform",
      description: "Session-based learning platform enabling skill exchange without monetary transactions",
      fullDescription: "An innovative skill exchange platform that enables users to learn and teach skills through session-based interactions without monetary transactions. The platform features user progress tracking, session management, and a matching algorithm to connect learners with appropriate skill providers based on their learning goals and expertise.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Session Management",
        "User Progress Tracking",
        "Skill Exchange",
        "Web Development",
      ],
      detailedDescription: {
        problem: "Traditional skill learning platforms are often expensive and inaccessible, creating barriers for individuals who want to learn new skills but lack financial resources",
        process: "Designed and developed a session-based learning system where users can offer skills they're proficient in and learn skills they want to acquire. Implemented progress tracking to monitor learning journeys. Built a matching algorithm to connect compatible learners and teachers.",
        outcome: "Created an accessible skill learning platform that fosters community-driven knowledge exchange. The platform has facilitated skill-sharing sessions and built a learning community.",
      },
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
      links: {
        github: "https://github.com/JeevasriRamesh/Skill-Barter-",
        demo: "https://skill-barter-hxhk.onrender.com/",
      },
    },
    {
      id: "velora",
      episodeNumber: "04",
      title: "VELORA - Fashion Shopping App Prototype",
      category: "UI/UX Design & Frontend Development",
      description: "An elegant fashion shopping app prototype designed in Figma and developed as an interactive web experience.",
      fullDescription: "VELORA is a mobile-first fashion shopping application prototype featuring an elegant shopping experience. Designed with Figma and developed into an interactive web prototype, it includes welcome, login, signup, home, product details, wishlist, shopping bag, profile, checkout, and order confirmation screens.",
      technologies: [
        "Figma",
        "HTML",
        "CSS",
        "JavaScript",
        "UI/UX Design",
        "Prototyping",
        "Frontend Development",
      ],
      detailedDescription: {
        problem: "Creating a simple and visually engaging fashion shopping experience with clear navigation across the main shopping activities.",
        process: "Designed an 11-screen mobile interface in Figma and developed an interactive web prototype with clickable navigation and shopping flows.",
        outcome: "Created a connected fashion shopping prototype covering the user journey from welcome and account access to checkout and order confirmation.",
      },
      coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=450&fit=crop",
      links: {
  github: "https://github.com/JeevasriRamesh/VELORA-Interactive-Prototype",
  demo: "https://velora-interactive-prototype.onrender.com/",
},
    },
  ],

  achievements: [
    {
      id: "achievement-1",
      title: "SECOND PRIZE",
      prize: "Idea Presentation Competition",
      project: "Smart Helmet System for Bluetooth Detection Using IoT",
      institution: "SIT College, Madurai",
      date: "2025",
      coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    },
    {
      id: "achievement-2",
      title: "FINALIST",
      prize: "Uyir Road Safety Hackathon 2025",
      project: "Smart Helmet System for Bluetooth Detection Using IoT",
      institution: "Tamil Nadu Government",
      date: "2025",
      coverImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=450&fit=crop",
    },
  ],

  publications: [
    {
      id: "pub-1",
      title: "Enhancing Cancer Classification in Genomic Data: A Hybrid Approach Using Principal Component Analysis and Machine Learning Techniques",
      conference: "IITCEE 2025",
      doi: "10.1109/IITCEE64140.2025.10915244",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=450&fit=crop",
    },
    {
      id: "pub-2",
      title: "TNOpportune: A Personalized Eligibility-Based Job and TN.Govt Scheme Finder",
      conference: "ICSETI 2026",
      doi: "10.1109/ICSETI67678.2026.11636767",
      year: "2026",
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    },
    {
      id: "pub-3",
      title: "Predictive Analysis Using Industrial Equipments",
      conference: "IEEE Xplore",
      doi: "https://ieeexplore.ieee.org/document/11020528",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop",
    },
  ],

  skills: {
    programming: ["Java", "Python", "SQL"],
    web: ["HTML", "CSS", "JavaScript"],
    dataAnalytics: [
      "Data Cleaning",
      "Data Preprocessing",
      "Data Analysis",
      "Data Visualization",
      "Dashboard Development",
    ],
    tools: [
      "Microsoft Excel",
      "Microsoft Power BI",
      "Git",
      "GitHub",
      "Jira",
      "Trello",
      "Figma",
    ],
    database: ["MongoDB"],
    additional: [
      "SAP",
      "Manual Testing",
      "Automation Testing",
      "UI & UX Designing",
    ],
  },

  certifications: [
    {
      id: "cert-1",
      title: "Oracle SQL",
      issuer: "Oracle",
    },
    {
      id: "cert-2",
      title: "AWS Fundamentals Specialization",
      issuer: "Amazon Web Services",
    },
    {
      id: "cert-3",
      title: "Introducing SAP ABAP Fundamentals",
      issuer: "SAP",
    },
    {
      id: "cert-4",
      title: "Automation Testing Basics",
      issuer: "Simplilearn",
    },
    {
      id: "cert-5",
      title: "Software Testing with Generative AI",
      issuer: "Simplilearn",
    },
  ],

  social: {
    linkedin: "",
    github: "",
  },
};
