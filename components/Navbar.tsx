import Image from "next/image";
import Log from "../public/LogIn.svg";
import SearchBar from "./SearchBar";
import burger from "../public/burger.svg";
import { SetStateAction, Dispatch } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userState } from "./states";
import router from "next/router";

export default function Navbar({
  setIsSideBarVisible,
}: {
  setIsSideBarVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [myUser, setMyUser] = useRecoilState(userState);
  const handleClick = () => {
    setIsSideBarVisible(true);
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div className="flex flex-col static sm:flex-row text-white sm:h-24 h-full font-Open z-20 px-3 sm:px-5 sm:py-6 py-5  justify-between  align-middle items-center w-full">
      <div className="sm:text-4xl flex text-4xl font-bold mr-5">
        <a href="/squad">Fiverr. Squad</a>
        <p>{myUser.firstname}</p>
      </div>
      <SearchBar />
      <div className="flex items-end sm:items-center justify-between w-full sm:justify-end sm:w-2/12 px-2 mt-10 sm:mt-0">
        <div className="flex flex-row-reverse sm:flex-row items-end sm:items-start">
          <Link href={`/profile/${myUser.id}`}>
            <Image
              className="cursor-pointer"
              src={Log}
              height={25}
              width={25}
              alt="log"
            />
          </Link>

          <button
            onClick={handleClick}
            className="rounded-md w-24 h-9 mx-2 text-white bg-buttonBlue focus:outline-none shadow-inputShadow "
          >
            <a href="/">Logout</a>
          </button>
        </div>
        <button className="focus:outline-none sm:hidden" onClick={handleClick}>
          <Image src={burger} alt="burger" />
        </button>
      </div>
    </div>
  );
}
