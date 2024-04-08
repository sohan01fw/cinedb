import axios from "axios";
import React from "react";
import { API_KEY } from "../../../utils/request";
import MoviesDetails from "../../../Components/MoviesDetails";
import Header from "../../../Components/Header";
import { useQuery } from "@tanstack/react-query";

const Page = ({ movieData }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movieData"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return movieData;
    },
  });

  return (
    <>
      <Header />
      {isPending ? <div>Loading...</div> : <MoviesDetails datas={data} />}
    </>
  );
};

export default Page;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const x = movie?.data;
  return {
    props: {
      movieData: x,
    },
  };
}
