
import React, { useState, useEffect, useMemo } from 'react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_GROUPS, 
  EDUCATION, 
  CERTIFICATIONS 
} from './constants';
import SectionHeader from './components/SectionHeader';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import SkillCategory from './components/SkillCategory';

type SortOption = 'recent' | 'company' | 'role';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [experienceSearch, setExperienceSearch] = useState('');
  const [experienceSort, setExperienceSort] = useState<SortOption>('recent');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredExperiences = useMemo(() => {
    let result = [...EXPERIENCES].filter(exp => 
      exp.company.toLowerCase().includes(experienceSearch.toLowerCase()) ||
      exp.role.toLowerCase().includes(experienceSearch.toLowerCase())
    );

    if (experienceSort === 'company') {
      result.sort((a, b) => a.company.localeCompare(b.company));
    } else if (experienceSort === 'role') {
      result.sort((a, b) => a.role.localeCompare(b.role));
    } else {
      // 'recent' - Assuming the constants are already ordered or we could parse dates if needed.
      // For this implementation, we treat original order as "Recent" (chronological).
    }

    return result;
  }, [experienceSearch, experienceSort]);

  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            SU<span className="text-blue-600">.</span>
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                {PERSONAL_INFO.relocationStatus}
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Sandeep <br />
                <span className="text-blue-600">Undurthi</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex space-x-5">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 text-2xl transition-colors"><i className="fab fa-github"></i></a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-red-500 text-2xl transition-colors"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <p className="text-3xl font-bold text-blue-600">3.75</p>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">MS GPA</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <p className="text-3xl font-bold text-blue-600">10+</p>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Tech Skills</p>
                    </div>
                    <div className="col-span-2 bg-blue-600 p-4 rounded-xl text-center">
                      <p className="text-white font-semibold">Specialized in CS & SWE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader 
              title="Work Experience" 
              subtitle="Where I've applied my skills professionally" 
              icon="fas fa-briefcase"
            />
            
            {/* Filter & Sort Controls */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="relative w-full sm:w-64">
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                <input 
                  type="text" 
                  placeholder="Filter by company or role..."
                  value={experienceSearch}
                  onChange={(e) => setExperienceSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Sort by:</span>
                <div className="flex bg-gray-200 p-1 rounded-lg">
                  {(['recent', 'company', 'role'] as SortOption[]).map((option) => (
                    <button
                      key={option}
                      onClick={() => setExperienceSort(option)}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-all capitalize ${
                        experienceSort === option 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              {filteredExperiences.length > 0 ? (
                filteredExperiences.map((exp, idx) => (
                  <ExperienceCard key={`${exp.company}-${idx}`} experience={exp} />
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                  <i className="fas fa-search text-gray-300 text-4xl mb-4"></i>
                  <p className="text-gray-500 font-medium">No experiences match your filter.</p>
                  <button 
                    onClick={() => setExperienceSearch('')}
                    className="mt-4 text-blue-600 font-bold hover:underline"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader 
              title="Featured Projects" 
              subtitle="Solving complex problems with data and code" 
              icon="fas fa-code"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader 
              title="Expertise & Skills" 
              subtitle="My technical toolbox across various domains" 
              icon="fas fa-tools"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {SKILL_GROUPS.map((group, idx) => (
                <SkillCategory key={idx} group={group} />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-20 md:py-32 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SectionHeader 
                  title="Education" 
                  icon="fas fa-graduation-cap"
                />
                <div className="mt-10 bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-1">{EDUCATION.institution}</h3>
                  <p className="text-blue-400 font-medium mb-4">{EDUCATION.degree}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 text-sm mb-6 uppercase tracking-wider font-semibold">
                    <span><i className="far fa-calendar-alt mr-2"></i>{EDUCATION.period}</span>
                    <span><i className="fas fa-map-marker-alt mr-2"></i>{EDUCATION.location}</span>
                    <span><i className="fas fa-star mr-2"></i>GPA: {EDUCATION.gpa}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.coursework.map((course, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <SectionHeader 
                  title="Certifications" 
                  icon="fas fa-award"
                />
                <div className="mt-10 space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="group bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-between">
                      <div>
                        <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{cert.platform}</p>
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{cert.name}</h4>
                      </div>
                      <i className="fas fa-chevron-right text-gray-600 group-hover:text-white transition-all"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sandeep Undurthi</h2>
            <p className="text-gray-500">Master of Science in Computer Science</p>
            <p className="text-gray-400 text-sm mt-1">{PERSONAL_INFO.location}</p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex space-x-6 text-2xl text-gray-400">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors"><i className="fab fa-github"></i></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-500 transition-colors"><i className="fas fa-envelope"></i></a>
            </div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
