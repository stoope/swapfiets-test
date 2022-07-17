import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BikesContainer } from "../components/bikes";
import { SearchControls } from "../components/searchControls";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [city, setCity] = useState("");

  return (
    <main className={styles.container}>
      <Head>
        <title>Search for all bikes</title>
      </Head>

      <h1 className={styles.title}>Search for all bikes in the city!</h1>
      <div className={styles.controls}>
        <SearchControls search={setCity} />
      </div>
      <div className={styles.bikes}>
        <BikesContainer city={city} />
      </div>
    </main>
  );
};

export default Home;
