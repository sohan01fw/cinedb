import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import requests from "../utils/request";
import Movies from "../Components/Movies";
export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Movies datas={data.results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const Tmdbdata = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.Trending.url
    }`
  );
  const getdata = await Tmdbdata.json();
  return {
    props: {
      data: getdata,
    }, // will be passed to the page component as props
  };
}
