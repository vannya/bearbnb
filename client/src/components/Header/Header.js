import React from 'react';
import { Link } from 'react-router-dom';
import bear from '../../bearlogo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={bear} alt="Bearbnb" className={styles.logo} />
      </Link>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>Host a Home</li>
          <li className={styles.listItem}>Host an experience</li>
          <li className={styles.listItem}>Help</li>
          <li className={styles.listItem}>Sign up</li>
          <li className={styles.listItem}>Log in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
