import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from '../components/Sidebar';
import { useState,useEffect } from 'react';
import router from "next/router"
interface IProps {
  page: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);

  useEffect(() => {
    if(!localStorage.getItem("user")){router.push("/login")}
  },[])

  return (
    <div className="w-full h-screen fixed bg-backGround bg-cover flex flex-col bg-darkPink">
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar setIsSideBarVisible={setIsSideBarVisible} />
      <div className="flex">
        <Sidebar isSideBarVisible={isSideBarVisible} setIsSideBarVisible={setIsSideBarVisible} />
        {children}
      </div>
    </div>
  );
}
