export const API_KEY = process.env.NEXT_PUBLIC_TmDB_KEY;
const requests = {
  Trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  TopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  Action: {
    title: "Action",
    genreId: "28",
  },
  Comedy: {
    title: "Comedy",
    genreId: "35",
  },
  Horror: {
    title: "Horror",
    genreId: "27",
  },
  Romance: {
    title: "Romance",
    genreId: "10749",
  },
  Mystery: {
    title: "Mystery",
    genreId: "9648",
  },
  SciFi: {
    title: "Sci-Fi",
    genreId: "878",
  },
  Family: {
    title: "Family",
    genreId: "10751",
  },
  Western: {
    title: "Western",
    genreId: "37",
  },
  Animation: {
    title: "Animation",
    genreId: "16",
  },
  TV: {
    title: "TV",
    genreId: "10770",
  },
  Thriller: {
    title: "Thriller",
    genreId: " 53",
  },
  War: {
    title: "War",
    genreId: " 10752",
  },
  Western: {
    title: "Western",
    genreId: "37",
  },
};

export default requests;
