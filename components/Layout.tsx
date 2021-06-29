import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
interface IProps {
  page: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);

  return (
    <div className="w-full h-screen fixed bg-backGround bg-cover overflow-y-auto flex flex-col bg-darkPink">
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar setIsSideBarVisible={setIsSideBarVisible} />
      <div className="flex">
        <Sidebar
          isSideBarVisible={isSideBarVisible}
          setIsSideBarVisible={setIsSideBarVisible}
        />
        {children}
      </div>
    </div>
  );
}
