import axios from "axios";
import React from "react";
import { API_KEY } from "../../../utils/request";
import MoviesDetails from "../../../Components/MoviesDetails";
import Header from "../../../Components/Header";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import fetchMoviesDetails from "../../../utils/Actions/fetchMoviesDetails";

const Page = ({ movieData }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movieData"],
    queryFn: async () => {
      return movieData;
    },
  });

  if (isPending) return <div>loading...</div>;

  return (
    <>
      <Header />
      <MoviesDetails data={data} />
    </>
  );
};

export default Page;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
    // If the page with the userId is
    // not found, returns 404 page
  };
}

export async function getStaticProps({ params }) {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
  );
  const x = movie?.data;
  return {
    props: {
      movieData: x,
    },
  };
}
