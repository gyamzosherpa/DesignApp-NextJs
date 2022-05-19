import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.css';
import Circle from './Circle';
const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <Circle backgroundColor="freen" right="-50vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brandName}>Gyamzo</span> Agency
        </h1>
        <p className={styles.desc}>
          Create online store app and website of your choice in affordable
          price.
        </p>
        <button className={styles.button}>Discover</button>
      </div>

      <div className={styles.card}>
        <Image
          src="/assets/website.jpg"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
