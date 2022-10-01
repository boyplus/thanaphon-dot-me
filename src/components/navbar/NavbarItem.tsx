import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export interface INavbarItem {
  label: string;
  link: string;
  page: string;
}

const NavbarItem: React.FC<INavbarItem> = ({ label, link, page }) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <li className={isActive ? 'active' : ''}>
      <div className="dot"></div>
      <Link to={link}>
        <div className='navbar-item'>
          {label}
        </div>
      </Link>
    </li>
  )
}

export default NavbarItem;