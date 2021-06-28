import Image from 'next/image';
import Log from '../public/LogIn.svg';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <div className="flex flex-col static sm:flex-row text-white sm:h-24 h-full font-Open z-20 px-3 sm:px-5 sm:py-6 py-5  justify-between align-middle items-center w-full">
      <div className="sm:text-4xl text-4xl font-bold">Fiverr. Squad</div>
      <SearchBar />
      <div className="flex items-center">
        <h1 className="sm:text-xl font-bold mr-2 ">Thomas Barrial</h1>
        <Image className="" src={Log} height={25} width={25} alt="log" />
      </div>
    </div>
  );
}
