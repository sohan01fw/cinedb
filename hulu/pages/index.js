import Head from "next/head";
import Header from "../Components/Header";
import Movies from "../Components/Movies";
import axios from "axios";
import { API_KEY } from "../utils/request";
import { useQuery } from "@tanstack/react-query";

/* &sort_by=vote_average.desc ->> for top_rated */
/* &sort_by=popularity.desc ->> for popularity */
export default function Home({ resData }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cineData"],
    queryFn: async () => {
      // Simulate a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return resData;
    },
  });

  if (isError) {
    return <div>Error occur while fetching check your internet</div>;
  }
  return (
    <>
      <div className="">
        <Head>
          <title>Cinedb</title>
        </Head>
        <Header />
        {isPending ? <div>loading....</div> : <Movies resData={resData} />}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const xs = context.query.genre;
  if (xs) {
    const y = xs.split("-");
    const z = y[y.length - 1];
    const nz = parseInt(z);

    const result = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${z}`
    );

    return {
      props: { resData: result.data },
    };
  } else {
    const x = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );

    return {
      props: { resData: x.data },
    };
  }
}
