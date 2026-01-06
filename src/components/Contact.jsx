import React from 'react';

const Contact = () => {
  const activities = [
    '1st Prize : Tribeathon Hackathon, MES College',
    'Student Coordinator : Tech club at MES College and CUSAT',
    'TinkerHub Coordinator : MES College (Community for young tech enthusiasts).',
    'Volunteered : Huddle Global 2022 (Asia’s largest startup conclave)'
  ];

  const languages = ['English', 'Malayalam', 'Hindi'];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Activities and Leadership</h2>
        <ul>
          {activities.map((activity, index) => <li key={index}>{activity}</li>)}
        </ul>
        {/* <h2>Languages</h2>
        <ul>
          {languages.map((lang, index) => <li key={index}>{lang}</li>)}
        </ul> */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for opportunities or collaborations.</p>
          <p>Email: aadhil242@gmail.com</p>
          <p>Phone: +91-9074531687</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;