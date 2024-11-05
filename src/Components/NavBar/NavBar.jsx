import React from 'react';
import './NavBar.css';
import title from '../../Assets/title.png';

const NavBar = () => {
  // Scroll function to handle anchor link clicks
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <img src={title} alt="" />
      <div className="elements">
        <ul>
          <li onClick={() => scrollToSection('home')}>Product</li>
          <li onClick={() => scrollToSection('features')}>Solutions</li>
          <li onClick={() => scrollToSection('docs')}>Learn</li>
          <li onClick={() => scrollToSection('pricing')}>Pricing</li>
          <li onClick={() => scrollToSection('enterprise')}>Enterprise</li>
        </ul>
      </div>
      <div className="buttons">
        <button className='SignUp'>SignUp</button>
        <button className='LogIn'>LogIn</button>
      </div>
    </nav>
  );
};

export default NavBar;
