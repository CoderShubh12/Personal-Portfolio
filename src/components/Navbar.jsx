import React from 'react';

const Navbar = () => {
  const scrollToId = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo">SHUBHAM<span>RAI</span></div>
      <ul className="nav-links">
        <li onClick={() => scrollToId('about')}>About</li>
        <li onClick={() => scrollToId('skills')}>Skills</li>
        <li onClick={() => scrollToId('projects')}>Projects</li>
        <li onClick={() => scrollToId('experience')}>Experience</li>
        <li onClick={() => scrollToId('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;