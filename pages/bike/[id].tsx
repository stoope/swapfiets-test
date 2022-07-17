import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getBikeDetails } from "../../api";
import styles from "../../styles/Bike.module.css";
import { BikeDetailsComponent } from "../../components/bikeDetails";
import { Error } from "../../components/Error";
import { BikeDetails } from "../../types";

interface IBike {
  bike?: BikeDetails;
}

const Bike: NextPage<IBike> = ({ bike }) => {
  return (
    <main className={styles.container}>
      <Head>
        <title>{bike?.title ?? "Error"}</title>
      </Head>
      {bike ? <BikeDetailsComponent bike={bike} /> : <Error />}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  let bike = undefined;
  try {
    const result = await getBikeDetails(Number(id));
    bike = result.bike;
  } catch {}

  return {
    props: { bike },
  };
};

export default Bike;
