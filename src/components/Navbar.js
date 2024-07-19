import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = useSelector((state) => state.navbar);

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link to={item.Link}>{item.TabName}</Link>
            {item.Description && <span className="description">{item.Description}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
