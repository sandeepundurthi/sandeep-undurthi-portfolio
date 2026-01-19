
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full group">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-3 flex-grow">
        {project.description.map((point, idx) => (
          <p key={idx} className="text-gray-600 text-sm leading-relaxed border-l-2 border-gray-100 pl-3">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
