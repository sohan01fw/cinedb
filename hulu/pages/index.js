import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import requests, { API_KEY } from "../utils/request";
import Movies from "../Components/Movies";
import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import axios from "axios";
/* &sort_by=vote_average.desc ->> for top_rated */
/* &sort_by=popularity.desc ->> for popularity */
export default function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cineData"],
    queryFn: async () => {
      const Tmdbdata = await axios
        .get
        /* `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${API_KEY}&language=en-US` */
        /* `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`  for trending weekly*/
        ();

      return Tmdbdata;
    },
  });
  if (isPending) return console.log("pending....");
  console.log(data);
  return (
    <div className="">
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
