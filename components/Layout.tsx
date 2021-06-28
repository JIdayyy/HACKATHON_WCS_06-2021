import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from '../components/Sidebar'
interface IProps {
  page: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  return (
    <div className="w-full h-screen fixed bg-backGround bg-cover flex flex-col bg-darkPink">
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar />
      <div className="flex">
      <Sidebar/>
      {children}
      </div>
    </div>
  );
}
