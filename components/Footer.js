import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>CREATIVES AGENCY.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image
                src={'/assets/link.png'}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Swayambhu, Kathmandu,
          <br /> NEPAL
        </div>
        <div className={styles.cardItem}>
          gyamzo@gmail.com
          <br /> +977-9512345892
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br />
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-instagram-square"></i>
          <i className="fa-brands fa-twitter-square"></i>
        </div>
        <div className={styles.cardItem}>
          © 2022 GYAMZO AGENCY,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
