import Head from "next/head";
import Header from "../Components/Header";
import Movies from "../Components/Movies";
import axios from "axios";
import { API_KEY } from "../utils/request";
import dynamic from "next/dynamic";

/* &sort_by=vote_average.desc ->> for top_rated */
/* &sort_by=popularity.desc ->> for popularity */
export default function Home({ resData }) {
  return (
    <>
      <div className="">
        <Head>
          <title>Hulu</title>
        </Head>
        <Header />
        <Movies resData={resData} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const Tmdbdata = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  /* `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${API_KEY}&language=en-US` */

  return {
    props: { resData: Tmdbdata?.data },
    revalidate: 24 * 60 * 60,
  };
}
