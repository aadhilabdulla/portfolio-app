import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="name">Aadhil Abdulla</h1>
        <nav className="nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;