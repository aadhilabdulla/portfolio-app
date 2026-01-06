import React from 'react';

const Skills = () => {
  const skills = {
    languages: ['Kotlin', 'SwiftUI', 'JavaScript (ES6+)', 'TypeScript', 'Jetpack Compose'],
    backend: ['NestJS', 'Node.js', 'Express.js', 'Spring Boot'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    tools: ['Linux', 'Git', 'GitHub', 'Firebase', 'AWS (S3, Lambda)', 'Oracle Cloud', 'Swagger'],
    concepts: ['RESTful APIs', 'MVC', 'MVVM', 'Modular Architecture', 'Microservices', 'Agile methodology'],
    keySkills: ['NestJS', 'Node.js', 'REST API', 'PostgreSQL', 'MongoDB', 'Backend Development', 'API Integration']
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages & Frameworks</h3>
            <ul>
              {skills.languages.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend & Web</h3>
            <ul>
              {skills.backend.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              {skills.databases.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Cloud</h3>
            <ul>
              {skills.tools.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Concepts</h3>
            <ul>
              {skills.concepts.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Key Skills</h3>
            <ul>
              {skills.keySkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;