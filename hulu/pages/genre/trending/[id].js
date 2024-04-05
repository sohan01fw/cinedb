import axios from "axios";
import React from "react";
import { API_KEY } from "../../../utils/request";
import MoviesDetails from "../../../Components/MoviesDetails";

const Page = ({ movieData }) => {
  return <MoviesDetails movies={movieData} />;
};

export default Page;

// This function gets called at build time
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
  );

  return {
    props: {
      movieData: movie.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // 1 second
  };
}
