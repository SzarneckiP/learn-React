import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

/*Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
  };*/

const Hero = props => (
      <header className={styles.Component}>
          <h2 className={styles.title}>{props.titleText}</h2>
          <img src={props.image} alt="space" className={styles.image}></img>
      </header>
);
  


export default Hero;