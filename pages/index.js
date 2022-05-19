/* eslint-disable react/no-unknown-property */
import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import styles from '../styles/Home.module.css';
import { data } from '../data';

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyamzo sherpa</title>
        <meta name="description" content="Gyamzo sherpa is the best" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
