
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="mb-10 text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
        {icon && <i className={`${icon} text-blue-600 text-2xl`}></i>}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
      <div className="h-1.5 w-20 bg-blue-600 rounded-full mt-4 mx-auto md:mx-0"></div>
    </div>
  );
};

export default SectionHeader;
