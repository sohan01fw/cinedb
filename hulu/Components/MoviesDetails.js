import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  HeartIcon,
  PlayCircleIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Trailer from "./youtube/Trailer";
import YouTube from "react-youtube";

const MoviesDetails = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const { pathname } = router;
  const [key, setKey] = useState(null);
  const BASE_URL = "https://image.tmdb.org/t/p/w300_and_h450_face/";
  const TrailerURL = "https://www.youtube.com/watch?v=";

  const playTrailer = () => {
    let key = data.videos.results[0].key;
    setKey(key);
  };
  return (
    <div className=" mt-10 h-[27rem] w-full flex justify-center pt-14 md:pt-8 ">
      <div className="  w-[12rem] md:w-[15rem] h-[18rem] md:h-[22.5rem] mr-3  ">
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
      <div className=" overflow-scroll  md:w-[59rem] md:h-[24rem]  h-[18rem] p-1 ">
        <div className="title flex ">
          <h1 className="font-bold text-xl md:text-3xl">
            {data.original_title}
          </h1>
          <div className=" font-semibold mt-[-13px] pl-1">
            <p className=" mt-3 font-bold text-xl text-gray-400">
              ({data.release_date.slice(0, 4)})
            </p>
          </div>
        </div>
        <div className=" desc_genre  flex text-sm text-gray-400">
          <div className="whitespace-nowrap   flex ">
            {data?.genres.map((genre, index) => (
              <div key={index} className="font-semibold">
                {genre.name}
                {index !== data.genres.length - 1 && ","}
                {/* Add a comma if not the last item */}
              </div>
            ))}
          </div>
          <h2 className="font-semibold text-sm">({data.runtime}min)</h2>
        </div>
        <div>
          <div className=" flex font-semibold">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="yellow"
                className="w-6 h-6 fill-yellow-400 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </h1>
            <p className="font-bold ">({data.vote_average.toFixed(1)})/10</p>
          </div>
        </div>
        <div className="mt-3 flex justify-between w-44 ml-2">
          <div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-red-500 text-lg hover:cursor-pointer "
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mt-[0.15rem] hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              document.getElementById("my_modal_1").showModal(), playTrailer();
            }}
            className=" flex hover:cursor-pointer mt-[-2px]  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 mt-[-1.5px] mr-[0.4rem]"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="10%" stopColor="#6366F1" />
                  <stop offset="30%" stopColor="#60A5FA" />
                  <stop offset="90%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path
                fill="url(#gradient)"
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clipRule="evenodd"
              />
            </svg>

            <h4 className="font-semibold whitespace-nowrap w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text  ">
              play trailer
            </h4>
          </div>
        </div>
        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box  max-w-[44rem]">
              <h3 className="font-bold text-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
                Trailer
              </h3>
              <p className="py-4">{key ? <YouTube videoId={key} /> : null}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-transparent hover:bg-clip-text">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="desc  mt-5">
          <div className="">
            <h2 className="text-gray-500 font-bold italic">{data.tagline}</h2>
          </div>
          <div className="  flex flex-col flex-grow  break-words ">
            <h1 className=" font-bold text-xl ">Overview</h1>
            <p className=" overview  overflow-scroll w-60 md:w-full">
              {data.overview}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-3 md:mt-10">
          <div className="font-bold hover:cursor-pointer text-gray-400 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-transparent hover:bg-clip-text">
            status<h3>{data.status}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
