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
    <>
      <div className="flex flex-col items-center sm:flex-row p-5 md:justify-between md:p-5">
        <div className="flex flex-grow max-w-2xl ">
          <HeaderItem Icons={HomeIcon} title="Home" />
          <HeaderItem Icons={BoltIcon} title="Trending" />
          <HeaderItem Icons={CheckBadgeIcon} title="Verified" />
          <HeaderItem Icons={MagnifyingGlassIcon} title="Search" />
          <HeaderItem Icons={UserIcon} title="user" />
        </div>
        <Image
          src={"https://links.papareact.com/ua6"}
          height={100}
          width={200}
        />
      </div>
      <NavBar />
    </>
  );
};

export default Header;
