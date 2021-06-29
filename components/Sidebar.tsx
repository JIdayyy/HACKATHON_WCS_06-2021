import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import close from '../public/images/close.svg';

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
          ? 'w-screen h-screen absolute top-0  left-0 z-50 transform flex bg-opacity-75 bg-black'
          : 'w-sideBar z-50 transform hidden sm:flex  bg-opacity-75 bg-black'
      }>
      <button onClick={handleClick}>
        <Image src={close} height={25} width={25} alt="cross" />
      </button>
    </div>
  );
}
