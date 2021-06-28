import Group_Card from '../components/Group_Card';
import SearchBar from '../components/SearchBar';
import Image from 'next/image';
import Log from '../public/LogIn.svg';
import Link from 'next/link';

export default function Home(): JSX.Element {
  const ressource = [];
  return (
    <div className="h-screen w-screen text-white bg-backGround bg-cover bg-no-repeat bg-center Z-50 flex-col absolute top-0 items-center justify-center min-h-screen py-2">
      <div className="w-full flex pr-12 pt-5 justify-end">
        <button className=" mr-2 text-xl">LogIn</button>
        <Image className="" src={Log} height={20} width={20} alt="log" />
      </div>
      <div className="text-white w-screen mt-20 flex flex-col justify-center items-center">
        <div className="font-Open text-center">
          <h1 className="sm:text-9xl text-6xl text-center font-bold">fiverr.squad</h1>
          <h2 className="mt-10 sm:text-5xl text-3xl font-bold">Find your perfect squad and speed up your projects.</h2>
        </div>
        <div className="text-center font-Montserrat mt-10">
          <h2 className="sm:text-4xl text-2xl font-light">You are aproject Manager or a freelancer</h2>
          <h3 className="mt-5 sm:text-3xl text-lg font-light">Find the team you need already build and ready to work on your dream project. </h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:w-4/12 mt-10 justify-between">
          <Link href="/squad">
            <a className="bg-pink shadow-buttonShadow mt-5 px-8 py-2 rounded-md">Find Your Squad</a>
          </Link>
          <button className="bg-pink shadow-buttonShadow mt-5 px-8 py-2 rounded-md">Hire Your Squad</button>
        </div>
      </div>
    </div>
  );
}
