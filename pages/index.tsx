import { useSession, getSession } from 'next-auth/client';
import Image from 'next/image';
import router from 'next/router'
import {useEffect} from 'react'
import Log from '../public/LogIn.svg';
import Link from 'next/link';

export default  function Home(): JSX.Element {
  return (
    <div className="h-screen w-screen text-white bg-backGround bg-cover bg-no-repeat bg-center z-50 flex-col absolute top-0 items-center justify-center min-h-screen py-2">
      <div className="w-full flex pr-12 pt-5 justify-end">
        <Link href="/login">
          <button className=" mr-2 text-xl">LogIn /</button>
        </Link>
        <Link href="/signup">
          <button className=" mr-2 text-xl">Sign up</button>
        </Link>

        <Image className="" src={Log} height={20} width={20} alt="log" />
      </div>
      <div className="text-white w-screen mt-20 flex flex-col justify-center items-center">
        <div className="font-Open text-center">
          <h1 className="sm:text-9xl text-6xl text-center font-bold">fiverr.squad</h1>
          <h2 className="mt-12 sm:text-5xl mx-4 text-2xl font-bold">Find your perfect squad and speed up your projects.</h2>
        </div>
        <div className="text-center font-Montserrat mx-4 mt-16">
          <h2 className="sm:text-3xl text-xl font-light">You are aproject Manager or a freelancer</h2>
          <h3 className="mt-5 sm:text-2xl text-sm font-light">Find the team you need already build and ready to work on your dream project. </h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:w-4/12 sm:mt-20 mt-10 sm:justify-between">
          <Link href="/squad">
            <a className="bg-pink shadow-buttonShadow mt-5 px-8 py-2 rounded-md">Find Your Squad</a>
          </Link>
          <button className="bg-pink shadow-buttonShadow mt-5 px-8 py-2 rounded-md">Hire Your Squad</button>
        </div>
      </div>
    </div>
  );
}
