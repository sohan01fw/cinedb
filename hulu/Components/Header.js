import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center sm:flex-row p-5 md:justify-between md:p-5 md:mt-[-10px]">
        <div className="flex flex-grow max-w-2xl ">
          <HeaderItem Icons={HomeIcon} title="Home" />
          <HeaderItem Icons={BoltIcon} title="Trending" />
          <HeaderItem Icons={CheckBadgeIcon} title="Verified" />
          <HeaderItem Icons={MagnifyingGlassIcon} title="Search" />
          <HeaderItem Icons={UserIcon} title="user" />
        </div>
        <div className="mt-[-20px]">
          <h1
            className="text-4xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text"
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            CINEDB
          </h1>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
