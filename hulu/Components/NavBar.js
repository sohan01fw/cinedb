import requests from "../utils/request";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className=" flex whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              onClick={() => {
                router.push(`/?genre=${title}`);
              }}
              className="transition duration-100 transform text-xl  hover:scale-125 hover:animate-pulse px-5 last:px-4 sm:px-10 md:px-14 cursor-pointer p-2"
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
