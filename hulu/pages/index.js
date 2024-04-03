import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import requests, { API_KEY } from "../utils/request";
import Movies from "../Components/Movies";
import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
export default function Home() {
  const { currentUser } = getAuth();
  console.log(currentUser);
  /*   const { isPending, isError, data, error } = useQuery({
    queryKey: ["cineData"],
    queryFn: async () => {
      const Tmdbdata = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      );

      const getdata = await Tmdbdata.json();
      return getdata;
    },
  });
  if (isPending) return console.log("pending/.//");
  console.log(data); */
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      {/*       <Movies datas={data.results} />
       */}
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  return {
    props: {},
    /*  props: {
        data: getdata,
      }, // will be passed to the page component as props */
  };
}
