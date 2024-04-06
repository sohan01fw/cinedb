import Head from "next/head";
import Header from "../Components/Header";
import Movies from "../Components/Movies";
import axios from "axios";
import { API_KEY } from "../utils/request";

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

export async function getServerSideProps(params) {
  const x = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );

  return {
    props: { resData: x.data },
  };
}
