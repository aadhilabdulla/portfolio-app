import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Vocation in Software Application Development',
      institution: 'Cochin University of Science and Technology (CUSAT)',
      period: '06/2024 - 04/2026'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'MES College Marampally',
      period: '06/2021 - 04/2024'
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;