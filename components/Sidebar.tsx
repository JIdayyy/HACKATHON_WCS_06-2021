import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import close from '../public/images/close.svg';
import { FakeCatégorie } from '../fakeData';
import { useQuery } from '@apollo/client';
import { getAllSectors } from '../apollo/sectorQueries';
import Link from 'next/link';

interface IProps {
  isSideBarVisible: boolean;
  setIsSideBarVisible: Dispatch<SetStateAction<boolean>>;
}

interface Sector {
  id: string;
  name: string;
}

export default function Sidebar({ isSideBarVisible, setIsSideBarVisible }: IProps) {
  const { data } = useQuery(getAllSectors);

  const handleClick = () => {
    setIsSideBarVisible(false);
  };

  console.log(data);

  return (
    <div
      className={
        isSideBarVisible
          ? 'transition ease-in duration-700 flex flex-col p-10 w-screen h-screen absolute top-0  left-0 z-50 transform bg-opacity-50 bg-backGround bg-cover '
          : 'w-sideBar z-50 hidden p-10 sm:flex  bg-opacity-75 '
      }>
      <button className="flex sm:hidden w-full justify-end" onClick={handleClick}>
        <Image src={close} height={25} width={25} alt="cross" />
      </button>
      <div className="flex flex-col font-Montserrat text-white font-open ">
        {data &&
          data.BusinessSector.map((sector: Sector, index: number) => {
            return (
              <div key={index} className="mt-8">
                <Link href={`/squad/categories/${sector.name}`}>
                  <button className="transition duration-500 text-lg text-gray-300 hover:text-white hover hover:-translate-y-1 hover:scale-110">
                    {sector.name}
                  </button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
