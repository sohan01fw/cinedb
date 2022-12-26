import Image from "next/image";

import { HandThumbUpIcon } from "@heroicons/react/24/outline";
const Thumbnails = ({ results }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 ">
      {results.map((result) => {
        return (
          <div
            key={result.id}
            className="group cursor-pointer m-5 transition duration-200 ease-in transform
    lg:hover:scale-105 hover:z-50 lg:p-2"
          >
            <Image
              layout="responsive"
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${result.poster_path}`
              }
              height={1080}
              width={1920}
            />

            <div className="p-2">
              <p className="truncate max-w-md">{result.overview}</p>
              <h2
                className="mt-1 text-2xl text-white
          md:transition-all duration-100 ease-in-out lg:group-hover:font-bold"
              >
                {result.title || result.original_name}
              </h2>
              <p className="flex items-center lg:opacity-0 lg:group-hover:opacity-100">
                {result.media_type && `${result.media_type} •`}{" "}
                {result.release_date || result.first_air_date} •{" "}
                <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnails;
