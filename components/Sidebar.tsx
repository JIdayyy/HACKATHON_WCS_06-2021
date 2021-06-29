import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import close from '../public/images/close.svg';
import { FakeCatégorie } from '../fakeData';

interface IProps {
  isSideBarVisible: boolean;
  setIsSideBarVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isSideBarVisible, setIsSideBarVisible }: IProps) {
  const handleClick = () => {
    setIsSideBarVisible(false);
  };
  return (
    <div
      className={
        isSideBarVisible
          ? 'flex flex-col w-screen h-screen absolute top-0  left-0 z-50 transform bg-opacity-75 bg-black'
          : 'w-sideBar z-50 transform hidden sm:flex  bg-opacity-75 bg-black'
      }>
      <button className="flex w-full justify-end" onClick={handleClick}>
        <Image src={close} height={25} width={25} alt="cross" />
      </button>
      <div className="flex flex-col text-white font-open ">
        {FakeCatégorie.map((ct) => {
          return (
            <div className="">
              <p>{ct.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
