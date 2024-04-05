import { useQuery } from "@tanstack/react-query";
import React from "react";

const MoviesDetails = ({ movies }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movieData"],
    queryFn: () => {
      return movies;
    },
  });
  if (isPending) return <div>loading...</div>;

  return <div>MoviesDetails</div>;
};

export default MoviesDetails;
