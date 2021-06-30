import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import router from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "./states";
interface IProps {
  page: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const [user, setUser] = useRecoilState(userState);
 
  useEffect(() => {
    const localUser = localStorage.getItem("user")

    if (!localStorage.getItem("user") && router.pathname !== "/signup") {
      router.push("/login");
    }
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localUser || ""));
    }
  }, []);

  return (
    <div className="w-full h-screen fixed bg-backGround bg-cover flex flex-col bg-darkPink">
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
