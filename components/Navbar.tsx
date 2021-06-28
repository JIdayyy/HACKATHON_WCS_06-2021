import Image from 'next/image';
import Log from '../public/LogIn.svg';

export default function Navbar() {
  return (
    <div className=" text-white h-24 font-Open z-20 px-3 sm:px-5 sm:py-6 py-5 flex justify-between align-middle items-center w-full">
      <div className="sm:text-4xl text-2xl font-bold">Fiverr. Squad</div>
      <div className="flex items-center">
        <h1 className="sm:text-xl font-bold mr-2">Thomas Barrial</h1>
        <Image className="" src={Log} height={25} width={25} alt="log" />
      </div>
    </div>
  );
}
