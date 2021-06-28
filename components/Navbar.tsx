import Image from 'next/image';
import Log from '../public/LogIn.svg';
import SearchBar from '../components/SearchBar';

export default function Navbar() {
  return (
    <div className=" flex flex-col sm:flex-row text-white sm:h-24 h-32  font-Open z-20 px-3 sm:px-5 sm:py-6 py-5 justify-between align-middle sm:items-center w-full">
      <div className="flex items-center justify-between">
        <h1 className="sm:text-4xl flex text-2xl font-bold">Fiverr. Squad</h1>
        <div className="flex">
          <h1 className="sm:text-xl font-bold mr-2">Thomas Barrial</h1>
          <Image className="" src={Log} height={25} width={25} alt="log" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
