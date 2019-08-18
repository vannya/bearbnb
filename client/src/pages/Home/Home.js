import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import image from '../../assets/homeimages/104.jpg';

const Home = props => {
  return (
    <section className={styles.home}>
      <img src={image} className={styles.background} />
      <aside className={styles.searchBox}>
        <header className={styles.header}>
          Book unique places to stay and things to do.
        </header>
        <div className={styles.inputWrapper}>
          <label htmlFor="home-location-search">WHERE</label>
          <input id="home-location-search" type="text" placeholder="Anywhere" />
        </div>
        {/* <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <button>Guests</button>
        </div> */}
        <div className={styles.buttonRow}>
          <button className={styles.searchButton}>Search</button>
        </div>
      </aside>
    </section>
  );
};

Home.propTypes = {};

export default Home;
