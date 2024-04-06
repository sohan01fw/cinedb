import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
const fetchMoviesDetails = () => {
  const router = useRouter();
  const id = router.query;
  console.log(id);
  /*     const getData = axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`)
   */ return;
};

export default fetchMoviesDetails;
