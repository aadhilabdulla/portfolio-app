import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'BACKEND DEVELOPER INTERN',
      company: 'Seeroo IT Solutions',
      period: '05/2025 – 08/2025',
      project: 'Let’s Reco – Vendor Recommendation Platform',
      achievements: [
        'Developed 60+ RESTful APIs using NestJS and PostgreSQL',
        'Built modules for vendor/user management, fetch analytics, file uploads, optimised CRON jobs, AWS SES and Winston Logger.',
        'Applied the abstract repository pattern and MVC architecture to ensure clean and scalable code base',
        'Collaborated with team using GitHub to ensure smooth and efficient workflow'
      ],
      technologies: 'NestJS, PostgreSQL, Docker, Swagger (OpenAPI), Postman'
    },
    {
      title: 'NODEJS DEVELOPER INTERN',
      company: 'Corestone Innovations',
      period: '12/2024 – 03/2025',
      project: 'Go Kerala – Taxi Booking Platform',
      achievements: [
        'Completed an internship as a backend developer using NestJS and MongoDB',
        'Gained hands-on experience with NestJS for the first time, contributing to API development, MongoDB database integration, and real-world backend service logic',
        'Migrated backend from Express.js to NestJS, refactoring controllers into service-based architecture and using constructor-based dependency injection for MongoDB models, improving API response time from 280ms to 180ms (~36% improvement).'
      ],
      technologies: 'NestJS, MongoDB'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company} <span>{exp.period}</span></h4>
            <p><strong>Project:</strong> {exp.project}</p>
            <h4>Key Achievements</h4>
            <ul>
              {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
            </ul>
            <h4>Technologies Used</h4>
            <p>{exp.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;