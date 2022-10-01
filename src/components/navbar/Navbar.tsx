import React, { Fragment } from 'react';

interface NavbarItem {
  label: string;
  link: string;
  page: string;
}

const items: NavbarItem[] = [
  { label: 'Home', link: '', page: 'home' },
  { label: 'About', link: '', page: 'about' },
  { label: 'Project', link: '', page: 'project' },
  { label: 'Contact', link: '', page: 'contact' },
];

const Navbar: React.FC = () => {
  return (
    <Fragment>
      {items.map(item => (<div>{item.label}</div>))}
    </Fragment>
  )
}

export default Navbar;