import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { API_KEY } from "../utils/request";
import axios from "axios";
const Thumbnails = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const queryClient = useQueryClient();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mt-10 justify-center  ">
      {result?.results &&
        result?.results.map((result, index) => {
          return (
            <Link href={`/genre/trending/${result?.id}`} key={index}>
              <div
                key={result.id}
                className=" w-80 md:w-60 lg:w-80 group cursor-pointer m-5 transition duration-200 ease-in transform
    lg:hover:scale-105 hover:z-50 lg:p-2  hover:gradient-shadow"
              >
                <Image
                  layout="responsive"
                  src={
                    `${BASE_URL}${
                      result.backdrop_path || result.poster_path
                    }` || `${result.poster_path}`
                  }
                  height={1080}
                  width={1920}
                  priority
                />

                <div className="p-2">
                  <h2
                    className="mt-1 text-2xl text-white
          md:transition-all duration-100 ease-in-out lg:group-hover:font-bold"
                  >
                    {result.title || result.original_name}
                  </h2>
                  <p className="flex items-center lg:opacity-0 lg:group-hover:opacity-100">
                    {result.release_date || result.first_air_date}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Thumbnails;
