import React from 'react';
import './layout.css';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={`layout`}>
      {children}
    </main>
  )
}

export default Layout;