import { useState, useEffect } from 'react';
import './navbar.css';
import './../../../index.css';
import data from './data';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (!event.target.closest('nav') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <div className={`container nav_container ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="/">
          <h4>CampDev</h4>
        </a>
        <ul className={`nav_menu ${isMenuOpen ? 'active' : ''}`}>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="open-menu-btn" onClick={toggleMenu}>
          <Hamburger size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
