
import { Project, Experience, SkillGroup, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Sandeep Undurthi",
  location: "Hillsboro, OR",
  relocationStatus: "Open to Relocation",
  email: "sandy.undurthi@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary: "Recent Master’s graduate in Computer Science with a strong foundation in Software Engineering, Distributed Systems, and Machine Learning. Experienced in building scalable full-stack applications and high-performance backend services. Proficient in Python, Java, and JavaScript, with a track record of delivering end-to-end solutions from system design to cloud deployment."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Y-KNOT Inc.",
    role: "Volunteer Web Developer",
    period: "Sep 2025 – Present",
    location: "Remote",
    points: [
      "Designed and developed an AI-driven Mentor–Mentee Management Portal, migrating legacy workflows to a modern, scalable architecture.",
      "Built automated registration pipelines and role-based dashboards using React and Node.js, improving administrative efficiency by 40%.",
      "Implemented matching algorithms and onboarding automation to streamline operations for 500+ users."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Scalable Microservices E-commerce Platform",
    technologies: ["Java", "Spring Boot", "Docker", "RabbitMQ", "PostgreSQL"],
    description: [
      "Architected a microservices-based backend for an e-commerce platform handling concurrent user requests.",
      "Implemented a distributed messaging system using RabbitMQ for asynchronous order processing and inventory updates.",
      "Containerized services with Docker and orchestrated deployment, ensuring high availability and fault tolerance."
    ]
  },
  {
    title: "Real-time Collaborative Code Editor",
    technologies: ["Node.js", "React", "Socket.io", "Redis", "Monaco Editor"],
    description: [
      "Developed a real-time collaborative platform allowing multiple users to edit code simultaneously with sub-100ms latency.",
      "Implemented Conflict-free Replicated Data Types (CRDTs) to ensure eventual consistency across client sessions.",
      "Optimized backend performance using Redis for session management and state synchronization."
    ]
  },
  {
    title: "Distributed File Storage System",
    technologies: ["Go", "gRPC", "Protobuf", "Raft Consensus"],
    description: [
      "Designed a distributed key-value store and file system inspired by GFS, focusing on data replication and consistency.",
      "Implemented the Raft consensus algorithm to handle leader election and log replication across 5+ nodes.",
      "Utilized gRPC for efficient inter-node communication and data serialization."
    ]
  },
  {
    title: "Restaurant Review Trustworthiness Detection",
    technologies: ["Python", "NLP", "SVM", "Streamlit"],
    description: [
      "Built an end-to-end NLP system using TF-IDF and Linear SVM to detect fraudulent reviews with 0.89 F1-score.",
      "Designed a trust-scoring pipeline using linguistic signals (e.g., sentiment variance, lexical diversity).",
      "Deployed an interactive dashboard for real-time review auditing and visualization."
    ]
  },
  {
    title: "Multi-threaded Web Crawler & Search Indexer",
    technologies: ["Python", "BeautifulSoup", "Multiprocessing", "Elasticsearch"],
    description: [
      "Developed a high-performance web crawler utilizing Python's multiprocessing to index 10,000+ pages per hour.",
      "Built a search interface using Elasticsearch to provide full-text search capabilities with relevance ranking.",
      "Implemented politeness policies and robots.txt parsing to ensure ethical scraping practices."
    ]
  },
  {
    title: "Personal Finance Analytics API",
    technologies: ["FastAPI", "PostgreSQL", "React", "D3.js"],
    description: [
      "Developed a RESTful API with FastAPI and SQLAlchemy for tracking and categorizing personal financial data.",
      "Created a React frontend with D3.js visualizations to provide insights into spending patterns and budget forecasting.",
      "Implemented secure JWT-based authentication and automated database migrations."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Software Engineering",
    skills: ["Data Structures & Algorithms", "System Design", "Object-Oriented Programming (OOP)", "RESTful APIs", "Microservices", "Unit Testing"]
  },
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Java", "C/C++", "Go", "JavaScript", "TypeScript", "React", "Node.js", "FastAPI", "Spring Boot"]
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "AWS", "GCP", "Docker", "Kubernetes"]
  },
  {
    category: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LLMs", "Hugging Face"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub Actions (CI/CD)", "Jira", "Postman", "Linux", "Bash Scripting"]
  }
];

export const EDUCATION: Education = {
  institution: "Utah State University",
  degree: "Master of Science in Computer Science",
  period: "Aug 2023 – May 2025",
  location: "Logan, UT",
  gpa: "3.75 / 4.0",
  coursework: [
    "Machine Learning", "Data Mining", "Neural Networks", "Advanced Algorithms",
    "Database Systems", "Operating Systems", "Cloud Computing", "Software Engineering"
  ]
};

export const CERTIFICATIONS: Certification[] = [
  { platform: "Coursera", name: "Machine Learning Specialization (Andrew Ng)" },
  { platform: "Udacity", name: "AI Programming with Python; Large Language Models" },
  { platform: "Udacity", name: "Data Science" },
  { platform: "DataCamp", name: "Python for Data Science" }
];
