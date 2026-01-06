import React, { useEffect, useRef } from 'react';
import { FaCode, FaDatabase, FaRocket, FaUsers, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const contentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.about-item');
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add('animate-in'), index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={contentRef}>
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-item">
            <div className="icon-card">
              <FaCode className="about-icon" />
            </div>
            <div className="about-text">
              <h3>Backend Development</h3>
              <p>Hands-on experience in Node.js, NestJS, and RESTful API development</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon-card">
              <FaDatabase className="about-icon" />
            </div>
            <div className="about-text">
              <h3>Scalable Systems</h3>
              <p>Specializing in scalable backend systems using MongoDB and PostgreSQL</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon-card">
              <FaRocket className="about-icon" />
            </div>
            <div className="about-text">
              <h3>End-to-End Solutions</h3>
              <p>Building end-to-end solutions, integrating backend services with web and mobile applications</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon-card">
              <FaUsers className="about-icon" />
            </div>
            <div className="about-text">
              <h3>Team Collaboration</h3>
              <p>Passionate about high-performance architectures, quick learner, and effective team collaborator</p>
            </div>
          </div>
          <div className="about-item">
            <div className="icon-card">
              <FaGraduationCap className="about-icon" />
            </div>
            <div className="about-text">
              <h3>Education</h3>
              <p>Currently pursuing M.Voc Software Application Development at CUSAT</p>
            </div>
          </div>
          <div className="about-item">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;