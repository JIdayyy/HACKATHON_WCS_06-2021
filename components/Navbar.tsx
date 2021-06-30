import Image from 'next/image';
import Log from '../public/LogIn.svg';
import SearchBar from './SearchBar';
import burger from '../public/burger.svg';
import { SetStateAction, Dispatch } from 'react';
import Link from 'next/link';

export default function Navbar({ setIsSideBarVisible }: { setIsSideBarVisible: Dispatch<SetStateAction<boolean>> }) {
  const handleClick = () => {
    setIsSideBarVisible(true);
  };
  return (
    <div className="flex flex-col static sm:flex-row text-white sm:h-16 h-full font-Open z-20 px-3 sm:px-5 sm:pt-12 py-5  justify-between  align-middle items-center w-full">
      <div className="sm:text-4xl text-4xl font-bold mr-5">
        <a href="/squad">Fiverr. Squad</a>
      </div>
      <div className="flex justify-center w-10/12 sm:w-7/12">
        <SearchBar />
      </div>
      <div className="flex items-end sm:items-center justify-between w-full sm:justify-end sm:w-2/12 px-2 mt-10 sm:mt-0">
        <div className="flex flex-row-reverse sm:flex-row items-end sm:items-start">
          <Link href="/profile/4fc11ed8-d7b6-469d-a1c3-df92881431a3">
            <Image className="cursor-pointer" src={Log} height={25} width={25} alt="log" />
          </Link>
        </div>
        <button className="focus:outline-none sm:hidden" onClick={handleClick}>
          <Image src={burger} alt="burger" />{' '}
        </button>
      </div>
    </div>
  );
}
