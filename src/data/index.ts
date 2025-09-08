import { PersonalInfo, Skill, Experience, Project, Education, Certificate, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Vishvendra Singh Khangarot",
  title: "Senior Full-Stack Developer",
  email: "vishvendrask@gmail.com",
  phone: "+91-78913-74599",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/vishvendra",
  github: "https://github.com/vishvendra",
  bio: "Senior Full-Stack Developer with 7+ years of experience delivering high-performance web and mobile applications for global clients including Google and DBS Bank. Expert in React.js, Angular, Node.js, RESTful APIs, and micro-frontend architectures.",
  profileImage: "/images/profile.jpg"
};

export const skills: Skill[] = [
  // Frontend Technologies
  { name: "React.js", level: 95, category: "frontend", icon: "⚛️" },
  { name: "Angular", level: 90, category: "frontend", icon: "🅰️" },
  { name: "Vue.js", level: 85, category: "frontend", icon: "💚" },
  { name: "Redux", level: 88, category: "frontend", icon: "🔄" },
  { name: "Material UI", level: 85, category: "frontend", icon: "🎨" },
  { name: "HTML5", level: 98, category: "frontend", icon: "🌐" },
  { name: "CSS3", level: 95, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 95, category: "languages", icon: "🟨" },
  { name: "Bootstrap", level: 90, category: "frontend", icon: "🅱️" },
  
  // Backend Technologies
  { name: "Node.js", level: 90, category: "backend", icon: "🟢" },
  { name: "PHP", level: 80, category: "backend", icon: "🐘" },
  { name: "Express.js", level: 85, category: "backend", icon: "🚀" },
  { name: "RESTful APIs", level: 92, category: "backend", icon: "🔗" },
  
  // Databases
  { name: "MySQL", level: 85, category: "database", icon: "🐬" },
  { name: "MongoDB", level: 82, category: "database", icon: "🍃" },
  { name: "PostgreSQL", level: 80, category: "database", icon: "🐘" },
  { name: "Firebase", level: 85, category: "database", icon: "🔥" },
  
  // Mobile Development
  { name: "Android", level: 88, category: "tools", icon: "🤖" },
  { name: "React Native", level: 85, category: "tools", icon: "📱" },
  { name: "Kotlin", level: 82, category: "languages", icon: "🔷" },
  { name: "Java", level: 80, category: "languages", icon: "☕" },
  
  // Tools & Platforms
  { name: "Git", level: 92, category: "tools", icon: "📝" },
  { name: "GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Bitbucket", level: 85, category: "tools", icon: "🪣" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" },
  { name: "Android Studio", level: 88, category: "tools", icon: "🔧" },
  { name: "Postman", level: 85, category: "tools", icon: "📬" },
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Senior System Engineer",
    company: "IBM India Pvt Ltd",
    location: "Bangalore, India",
    startDate: "2022-02",
    endDate: "Present",
    description: [
      "Team Lead – Google (Test Data Automation Project) - Leading frontend and backend development for Google's Test Data Automation project",
      "Built high-performance APIs using Angular and Google's Boq Node framework",
      "Ensured seamless UI/UX for the Test Data Management web application",
      "Senior React.js Developer – DBS Bank (IBNextGen Banking Platform) - Spearheaded modules for DBS Bank's IBNextGen platform using React.js & Redux",
      "Developed Micro-Frontend (MFE) components for payees, accounts, payments, transfers, and currency exchange",
      "Focused on performance optimization and backend integration"
    ],
    technologies: ["React.js", "Angular", "Node.js", "Redux", "Micro-Frontend", "Google Boq Framework"],
    companyLogo: "/images/companies/ibm.png"
  },
  {
    id: "exp2",
    title: "Senior Software Developer",
    company: "Globals ITES Pvt Ltd",
    location: "Bangalore, India",
    startDate: "2020-06",
    endDate: "2022-02",
    description: [
      "KBOCWW-CDMS (Labour Welfare Board Platform): Built a scalable web application with React.js, Redux, Material-UI for managing registrations, benefits, and schemes",
      "Confidential Government Defence Project: Designed an Android app in Kotlin with secure libraries",
      "Developed a real-time Vue.js monitoring dashboard",
      "Received Best Developer of the Year 2020 award",
      "eKYC Mobile App: Built a digital identity app in React Native, featuring Aadhaar/Bank verification and facial recognition"
    ],
    technologies: ["React.js", "Redux", "Material-UI", "Kotlin", "Vue.js", "React Native"],
    companyLogo: "/images/companies/globals.png"
  },
  {
    id: "exp3",
    title: "Associate Developer",
    company: "Adverscribe Ad Solutions Pvt Ltd",
    location: "Bangalore, India",
    startDate: "2019-08",
    endDate: "2020-04",
    description: [
      "Developed multiple web & mobile apps using React.js, Android, and PHP",
      "Zyime: Real-time data management for schools with React.js admin panel",
      "CINEWS: Cinema news & challenges mobile app",
      "Housefull2020: Hotel Lalit Ashok's New Year event ticketing site",
      "Golden Palms: Resort booking app + React.js admin panel",
      "Momnhers: E-commerce platform for maternity products",
      "Granny's Care: React.js admin panel for a spa & wellness service"
    ],
    technologies: ["React.js", "Android", "PHP", "JavaScript", "Material-UI"],
    companyLogo: "/images/companies/adverscribe.png"
  },
  {
    id: "exp4",
    title: "Frontend Developer / React.js Developer",
    company: "EnergyXchange",
    location: "Chicago (Remote), Bangalore",
    startDate: "2018-11",
    endDate: "2019-07",
    description: [
      "Developed energy trading & management platform frontend with React.js",
      "Built responsive web applications for energy market analysis",
      "Implemented real-time data visualization and trading interfaces"
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    companyLogo: "/images/companies/energyxchange.png"
  },
  {
    id: "exp5",
    title: "Android and Web Developer",
    company: "Om Birla – IT & Media Cell",
    location: "Kota, India",
    startDate: "2018-01",
    endDate: "2018-10",
    description: [
      "Designed Om Birla App for office & citizen communication",
      "Built official website: ombirla.com",
      "Developed an office management app similar to Truecaller",
      "Handled social media scheduling & digital communication tools"
    ],
    technologies: ["Android", "Java", "PHP", "JavaScript", "MySQL"],
    companyLogo: "/images/companies/ombirla.png"
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Google Test Data Management (TDM)",
    description: "Enterprise test data automation platform for Google",
    longDescription: "Leading frontend and backend development for Google's Test Data Automation project. Built high-performance APIs using Angular and Google's Boq Node framework with seamless UI/UX.",
    technologies: ["Angular", "Node.js", "Google Boq Framework", "TypeScript"],
    features: [
      "Enterprise test data automation",
      "High-performance API development",
      "Seamless UI/UX design",
      "Google's Boq Node framework integration"
    ],
    category: "web",
    featured: true,
    caseStudy: {
      challenge: "Google needed a comprehensive test data management solution to streamline their testing processes across multiple products and environments. The existing system was fragmented and lacked automation capabilities.",
      solution: "Developed a centralized TDM platform using Angular frontend with Google's Boq Node framework backend. Implemented automated data provisioning, environment management, and real-time monitoring capabilities.",
      results: [
        "Reduced test data setup time by 70%",
        "Improved testing efficiency across 15+ Google products",
        "Achieved 99.9% system uptime",
        "Streamlined data compliance and security protocols"
      ],
      impact: "The platform now serves as the primary test data management solution for Google's enterprise products, significantly improving development velocity and testing reliability.",
      timeline: "Dec 2023 - Present",
      teamSize: "Lead Developer in team of 8"
    }
  },
  {
    id: "proj2",
    title: "DBS Bank IBNextGen Platform",
    description: "Micro-frontend banking platform for DBS Bank",
    longDescription: "Spearheaded modules for DBS Bank's IBNextGen platform using React.js & Redux. Developed Micro-Frontend components for payees, accounts, payments, transfers, and currency exchange.",
    technologies: ["React.js", "Redux", "Micro-Frontend", "JavaScript"],
    features: [
      "Micro-Frontend architecture",
      "Payment processing modules",
      "Account management system",
      "Currency exchange functionality",
      "Performance optimization"
    ],
    category: "web",
    featured: true,
    caseStudy: {
      challenge: "DBS Bank needed to modernize their legacy banking platform while maintaining high security standards and seamless user experience across multiple banking services.",
      solution: "Implemented a micro-frontend architecture using React.js and Redux, allowing independent development and deployment of banking modules. Created reusable components for payments, transfers, and account management.",
      results: [
        "Improved deployment frequency by 300%",
        "Reduced page load times by 45%",
        "Enhanced user experience across all banking modules",
        "Achieved 100% uptime during migration"
      ],
      impact: "The platform successfully modernized DBS Bank's digital banking experience, serving millions of customers with improved performance and reliability.",
      timeline: "Feb 2022 - Dec 2023",
      teamSize: "Senior Developer in team of 12"
    }
  },
  {
    id: "proj3",
    title: "KBOCWW-CDMS Portal",
    description: "Karnataka Government labour welfare platform",
    longDescription: "Built a scalable web application with React.js, Redux, Material-UI for managing registrations, benefits, and schemes for Karnataka Govt labour welfare board.",
    technologies: ["React.js", "Redux", "Material-UI", "Node.js"],
    features: [
      "Worker registration management",
      "Benefits and schemes administration",
      "Scalable web architecture",
      "Government portal integration"
    ],
    liveUrl: "https://kbocww.karnataka.gov.in",
    category: "web",
    featured: true
  },
  {
    id: "proj4",
    title: "eKYC Mobile App",
    description: "Digital identity verification app with Aadhaar and facial recognition",
    longDescription: "Built a digital identity app in React Native, featuring Aadhaar/Bank verification and facial recognition for secure identity verification.",
    technologies: ["React Native", "JavaScript", "Facial Recognition API", "Aadhaar SDK"],
    features: [
      "Aadhaar verification",
      "Bank account verification",
      "Facial recognition",
      "Secure identity management",
      "Real-time verification"
    ],
    category: "mobile",
    featured: true
  },
  {
    id: "proj5",
    title: "Zyime School Management",
    description: "Real-time data management system for schools",
    longDescription: "Real-time data management for schools with React.js admin panel for comprehensive school administration and student management.",
    technologies: ["React.js", "Node.js", "MySQL", "JavaScript"],
    features: [
      "Student management",
      "Real-time data processing",
      "Admin panel interface",
      "Attendance tracking",
      "Grade management"
    ],
    category: "web",
    featured: false
  },
  {
    id: "proj6",
    title: "Golden Palms Resort App",
    description: "Resort booking application with admin panel",
    longDescription: "Complete resort booking solution with mobile app and React.js admin panel for Golden Palms Resort management.",
    technologies: ["Android", "React.js", "PHP", "MySQL"],
    features: [
      "Room booking system",
      "Admin management panel",
      "Real-time availability",
      "Payment integration",
      "Guest management"
    ],
    category: "mobile",
    featured: false
  }
];

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "Sir Padampat Singhania University",
    location: "Udaipur, India",
    startDate: "2013-07",
    endDate: "2017-06",
    description: "Specialized in Computer Science & Engineering with focus on software development, algorithms, and system design.",
    achievements: [
      "Core organizer of Endeavor Project for 3 years",
      "Selected among 12 students for International Industrial Training",
      "2nd Runner-up – International Robotics Challenge, IIT Bombay Techfest",
      "Completed SAP Training at JK Cement, Fujairah, UAE"
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: "cert1",
    name: "Front-End Web Development with React.js",
    issuer: "Coursera",
    issueDate: "2019-01",
    description: "Comprehensive course covering React.js fundamentals, components, state management, and modern frontend development practices.",
    skills: ["React.js", "JavaScript", "Frontend Development"]
  },
  {
    id: "cert2",
    name: "React.js Development",
    issuer: "The Hong Kong University of Science & Technology",
    issueDate: "2019-01",
    description: "Advanced React.js development course covering hooks, context, and modern React patterns.",
    skills: ["React.js", "JavaScript", "Component Architecture"]
  },
  {
    id: "cert3",
    name: "Android Application Development",
    issuer: "TOPS/Pentamedia Technologies",
    issueDate: "2015-01",
    description: "Complete Android application development course covering Java, Android SDK, and mobile app architecture.",
    skills: ["Android", "Java", "Mobile Development"]
  },
  {
    id: "cert4",
    name: "C and C++ Programming",
    issuer: "TOPS Technologies",
    issueDate: "2014-01",
    description: "Fundamental programming course covering C and C++ programming languages, data structures, and algorithms.",
    skills: ["C Programming", "C++", "Data Structures"]
  }
];

export const accomplishments = [
  "Best Developer of the Year 2020 – Globals ITES Pvt. Ltd. (Confidential Government Android Project)",
  "Certificate of Appreciation – JK Cement Works, UAE for developing logistics tracking and order booking system",
  "2nd Runner-up – International Robotics Challenge, IIT Bombay Techfest",
  "Selected among 12 students for International Industrial Training & SAP Training at JK Cement, Fujairah, UAE",
  "Core organizer of Endeavor Project (3 years) at Sir Padampat Singhania University"
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/vishvendra",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/vishvendra",
    icon: "github"
  },
  {
    platform: "Email",
    url: "mailto:vishvendrask@gmail.com",
    icon: "mail"
  }
];