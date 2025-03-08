export const portfolioData = {
  profile: {
    name: "Sithu Bo",
    title: "Full Stack Web Developer",
    summary: "Experienced Web Developer with 5+ years expertise in building robust web applications using Ruby on Rails. Proficient in full software development lifecycle management from concept to deployment. Specialised in database optimisation, Elasticsearch integration, and Dockerised application development. Successfully mentored junior developers and led teams to deliver high-quality software solutions.",
  },
  experience: [
    {
      company: "Binary Lab Co., Ltd",
      position: "Senior Backend Developer",
      duration: "November 2023 – Present",
      highlights: [
        "Developed a multi-tenant SaaS platform (Channel.org) on a modified Mastodon codebase, including an Admin Dashboard for streamlined management.",
        "Implemented core Admin Dashboard functionalities, including channel creation flow and a 3-tier Role-Based Access Control (RBAC) system for secure organisational management.",
        "Designed and automated micro-server provisioning using AWS Lambda and Ansible, reducing deployment time by 75%.",
        "Architected a high-throughput content filtering pipeline leveraging Elasticsearch and PostgreSQL for efficient content moderation.",
        "Integrated Mastodon API with WebSocket streaming for mobile clients, achieving 92% feature parity with leading Fediverse applications.",
        "Optimised database performance through query tuning and Redis caching, decreasing API latency by 35%."
      ],
      technologies: [
        "Ruby on Rails", "ReactJS", "Mastodon API", "AWS Lambda", "Ansible",
        "Elasticsearch", "PostgreSQL", "Redis", "Docker Swarm", "ActivityPub", "WebSockets"
      ]
    },
    {
      company: "METATEAM MYANMAR Co., Ltd",
      position: "Senior Web Developer - Full Stack",
      duration: "October 2021 – October 2023",
      highlights: [
        "Led 5-member team in developing recruitment platform CMS with RPO integration.",
        "Designed Scrapy-based web scraper that automated 90% of job listing data collection.",
        "Developed custom kitchen solutions ordering system using Laravel and Vue.js, providing a seamless and tailored user experience.",
        "Developed LP optimisation tool generating dynamic advertising content combinations.",
        "Implemented Trailblazer architecture for complex business logic maintainability.",
        "Mentored 5 junior developers through code reviews and pair programming sessions."
      ],
      technologies: ["Ruby on Rails", "Trailblazer", "Laravel", "Vue.js", "Scrapy", "MySQL"]
    },
    {
      company: "METATEAM MYANMAR Co., Ltd",
      position: "Web Developer",
      duration: "January 2020 – October 2021",
      highlights: [
        "Maintained legacy Ruby on Rails admin dashboard applications.",
        "Developed Django-based data for automated CSV/Excel data merging and analysis system reducing report generation time by 90%.",
        "Implemented secure authentication system with Role-Based Access Control.",
        "Optimised database schema leading to 30% improvement in query performance."
      ],
      technologies: ["Ruby on Rails", "Django", "Python", "MySQL", "Docker"]
    }
  ],
  skills: {
    technical: [
      "Ruby on Rails", "Python", "Laravel", "Trailblazer",
      "Django/Flask/Scrapy", "MySQL/PostgreSQL",
      "Elasticsearch", "Redis", "Docker",
      "AWS", "ReactJS/VueJS"
    ],
    soft: [
      "Technical Leadership", "Agile Development",
      "Cross-functional Collaboration", "Problem Solving",
      "Mentorship & Training"
    ]
  },
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Computer Studies, Magway",
      duration: "2015-2019"
    },
    {
      degree: "Professional Diploma in Java Programming",
      institution: "IMCEITS (Ministry of Science and Technology)",
      duration: "2019-2020"
    }
  ],
  awards: [
    "2021: Excellence Fresher Award (METATEAM MYANMAR)",
    "2020: First Runner-Up in National Level Project Competition (IMCEITS)"
  ],
  contact: {
    phone: "+669-2919-8031",
    email: "sithubo.stb97@gmail.com",
    address: "Bang Na Tai, Bang Na, Bangkok 10260",
    github: "https://github.com/SiThuBo",
    linkedin: "https://linkedin.com/in/sithu-bo-905129247"
  }
};
