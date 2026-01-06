import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      name: 'DriveFocus',
      subtitle: 'Android Driver Safety Application',
      description: 'Built a native Android app in Jetpack Compose to automatically manage calls, using a Foreground Service for driving detection and CallScreeningService for call interception.',
      technologies: ['Jetpack Compose', 'Shared Preferences'],
      link: 'https://github.com/aadhilabdulla/DriveFocus.git'
    },
    {
      name: 'FileGuard API',
      subtitle: 'High Performance Malware Scanning Service',
      description: 'Developed a containerized security API using NestJS and ClamAV, reducing malware scan latency from 6s to 30ms by integrating with the ClamAV daemon via Unix sockets.',
      technologies: ['NestJS', 'Docker', 'ClamAV Daemon'],
      link: 'https://github.com/aadhilabdulla/fileguard-api.git'
    },
    {
      name: 'ToDo Checkmate',
      subtitle: 'Full-Stack iOS Application',
      description: 'Built with SwiftUI (frontend), NestJS (backend) and MongoDB (database). Implemented user authentication, login and task management with REST APIs.',
      technologies: ['NestJS', 'SwiftUI', 'MongoDB'],
      link: 'https://github.com/aadhilabdulla/to-do-check-mate-swiftui.git'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <h2 className={isVisible ? 'animate-in' : ''}>Personal Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="project-content">
                <h3>{project.name}</h3>
                <h4>{project.subtitle}</h4>
                <h5>Description</h5>
                <p>{project.description}</p>
                <h5>Technologies Used</h5>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-link">
                  <span>View on GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;