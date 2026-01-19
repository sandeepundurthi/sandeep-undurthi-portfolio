
import React from 'react';
import { SkillGroup } from '../types';

interface SkillCategoryProps {
  group: SkillGroup;
}

// Comprehensive mapping of skill names to Font Awesome icon classes
const SKILL_ICONS: Record<string, string> = {
  // Languages & Core SE
  "Python": "fab fa-python",
  "Java": "fab fa-java",
  "C/C++": "fas fa-code",
  "Go": "fas fa-code-branch",
  "JavaScript": "fab fa-js",
  "TypeScript": "fas fa-code",
  "HTML/CSS": "fab fa-html5",
  "Data Structures & Algorithms": "fas fa-subscript",
  "System Design": "fas fa-network-wired",
  "Object-Oriented Programming (OOP)": "fas fa-cube",
  "RESTful APIs": "fas fa-cloud",
  "Microservices": "fas fa-cubes",
  "Unit Testing": "fas fa-vial",

  // Frameworks
  "React": "fab fa-react",
  "Node.js": "fab fa-node-js",
  "FastAPI": "fas fa-bolt",
  "Spring Boot": "fas fa-leaf",

  // Databases & Cloud
  "PostgreSQL": "fas fa-database",
  "MySQL": "fas fa-database",
  "Redis": "fas fa-memory",
  "Elasticsearch": "fas fa-search",
  "AWS": "fab fa-aws",
  "GCP": "fab fa-google",
  "Docker": "fab fa-docker",
  "Kubernetes": "fas fa-dharmachakra",

  // Machine Learning
  "TensorFlow": "fas fa-brain",
  "PyTorch": "fas fa-brain",
  "Scikit-learn": "fas fa-chart-line",
  "NLP": "fas fa-language",
  "LLMs": "fas fa-robot",
  "Hugging Face": "fas fa-smile",

  // Tools
  "Git": "fab fa-git-alt",
  "GitHub Actions (CI/CD)": "fab fa-github",
  "Jira": "fab fa-jira",
  "Postman": "fas fa-paper-plane",
  "Linux": "fab fa-linux",
  "Bash Scripting": "fas fa-terminal",
  "SQL": "fas fa-database"
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ group }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-50 pb-2">
        {group.category}
      </h4>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, idx) => {
          const iconClass = SKILL_ICONS[skill] || "fas fa-check-circle"; // Fallback icon
          return (
            <span 
              key={idx}
              className="group/skill px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all cursor-default flex items-center gap-2"
            >
              <i className={`${iconClass} text-blue-500 group-hover/skill:text-white transition-colors`}></i>
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategory;
