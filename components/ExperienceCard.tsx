
import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-10 border-l-2 border-gray-200 last:pb-0 group">
      <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform duration-300"></div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {experience.role}
          </h3>
          <p className="text-lg font-medium text-gray-700">{experience.company}</p>
        </div>
        <div className="text-gray-500 font-medium md:text-right mt-1 md:mt-0">
          <p>{experience.period}</p>
          <p className="text-sm">{experience.location}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {experience.points.map((point, index) => (
          <li key={index} className="text-gray-600 leading-relaxed flex items-start">
            <span className="text-blue-600 mr-2 mt-1.5 text-[8px] flex-shrink-0">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
