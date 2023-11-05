import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? styles.active : styles.link)}
            // className={styles.link}
            to="/"
            end
          >
            Produto
          </NavLink>
        </li>{' '}
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? styles.active : styles.link)}
            to="contato"
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
