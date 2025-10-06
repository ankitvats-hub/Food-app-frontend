import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from "../restApi.json";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/OurMenu');
    setShow(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav>
      <div className="logo">Chini-Roti</div>
      <div className={show ? "navLinks Showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((Element) => (
            <ScrollLink
              to={Element.link}
              key={Element.id}
              spy={true}
              smooth={true}
              duration={500}
            >
              {Element.title}
            </ScrollLink>
          ))}
        </div>

        <button className="menuBtn" onClick={handleMenuClick}>
          OUR MENU
        </button>

        {/* ✅ Logout button */}
        <button className="menuBtn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
