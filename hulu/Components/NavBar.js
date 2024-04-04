import requests from "../utils/request";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="relative sm:mt-[-20px] ">
      <div className=" flex whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => {
          return (
            <h2
              onClick={() => {
                router.push(`/?genre=${title}`);
              }}
              className="transition duration-100 transform text-xl  hover:scale-110 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-transparent hover:bg-clip-text hover:animate-pulse px-5 last:px-4 sm:px-10 md:px-14 cursor-pointer p-2 font-medium"
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      {/* setting up fade from right side of navbar noice thing to consider */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#16213E] h-10  w-1/12 md:w-10" />
    </nav>
  );
};

export default NavBar;
