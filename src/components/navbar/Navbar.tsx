import React, { Fragment } from 'react';
import './navbar.css'
import NavbarItem, { INavbarItem } from './NavbarItem';

const items: INavbarItem[] = [
  { label: 'Home', link: '/', page: 'home' },
  { label: 'About', link: '/about', page: 'about' },
  { label: 'Project', link: '/project', page: 'project' },
  { label: 'Contact', link: '/contact', page: 'contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {items.map(item => <NavbarItem key={item.page} {...item} />)}
      </ul>
    </nav>
  )
}

export default Navbar;