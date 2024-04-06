import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { API_KEY } from "../utils/request";

const MoviesDetails = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const { pathname } = router;

  const BASE_URL = "https://image.tmdb.org/t/p/w300_and_h450_face/";
  return (
    <div className="border border-white mt-10 h-[27rem] flex justify-center pt-14   ">
      <div className="border border-green-400 w-[12rem] h-[18rem]   ">
        <Image
          layout="responsive"
          className="object-contain"
          src={
            `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
            `${data.poster_path}`
          }
          height={450} // Increase the height
          width={300} // Decrease the width
          priority
        />
      </div>
      <div className=" border border-white h-[18rem] p-1 ">
        <div className="title flex ">
          <h1 className="font-bold text-xl">{data.original_title}</h1>
          <div className="badge badge-neutral font-semibold">
            <p className=" mt-3 font-bold text-xl text-gray-400">
              ({data.release_date.slice(0, 4)})
            </p>
          </div>
        </div>
        <div className=" desc_genre  flex">
          <div className="whitespace-nowrap   flex ">
            {data?.genres.map((genre, index) => (
              <div key={index} className="font-semibold">
                {genre.name}
                {index !== data.genres.length - 1 && ","}
                {/* Add a comma if not the last item */}
              </div>
            ))}
          </div>
          <h2 className="font-semibold">.{data.runtime}hrs</h2>
        </div>
        <div>
          <div className="badge badge-neutral flex font-semibold">
            <h1>Rating:</h1>
            <p className="font-bold ">{data.vote_average}</p>
          </div>
        </div>
        <div></div>
        <div className="desc">
          <div className="badge badge-neutral">
            <h2 className="text-gray-500 font-bold italic">{data.tagline}</h2>
          </div>
          <div className=" border border-white flex flex-col flex-grow  break-words ">
            <h1 className="  font-bold text-lg">Overview</h1>
            <p className="  border border-white  overflow-scroll   w-60 h-32">
              {data.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
