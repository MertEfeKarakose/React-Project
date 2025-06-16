import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.title}>hobbycostcalculator</span>
        </div>
        <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Calculator</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eee',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '64px',
    height: '64px',
    marginRight: '12px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '30px',
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: '0.2s',
  },
};

export default Header;
