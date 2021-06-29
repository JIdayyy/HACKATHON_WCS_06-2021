import Image from 'next/image';
import Log from '../public/LogIn.svg';
import SearchBar from './SearchBar';
import burger from '../public/burger.svg';
import { SetStateAction, Dispatch } from 'react';
import { set } from 'react-hook-form';

export default function Navbar({ setIsSideBarVisible }: { setIsSideBarVisible: Dispatch<SetStateAction<boolean>> }) {
  const handleClick = () => {
    setIsSideBarVisible(true);
  };
  return (
    <div className="flex flex-col static sm:flex-row text-white sm:h-24 h-full font-Open z-20 px-3 sm:px-5 sm:py-6 py-5  justify-between align-middle items-center w-full">
      <div className="sm:text-4xl text-4xl font-bold">Fiverr. Squad</div>
      <SearchBar />
      <div className="flex items-end sm:items-center justify-between w-full sm:justify-end sm:w-8/12 px-2 mt-10">
        <div className="flex items-end">
          <h1 className="sm:text-xl font-bold mr-2 ">Thomas Barrial</h1>
          <Image className="" src={Log} height={25} width={25} alt="log" />
        </div>
        <button onClick={handleClick}>
          <Image src={burger} alt="burger" />{' '}
        </button>
      </div>
    </div>
  );
}
