import React from 'react';
import styles from './Hero.scss';


class Hero  extends React.Component {
  render() {
    return (
      <header className={styles.Component}>
          <h2 className={styles.title}>Things to do</h2>
          <img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="space" className={styles.image}></img>
      </header>
    )
  }
}

export default Hero;