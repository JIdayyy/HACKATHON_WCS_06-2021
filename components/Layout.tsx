import Head from 'next/head';
import Navbar from './Navbar';

interface IProps {
  page: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  return (
    <div className="w-full flex flex-col bg-darkPink">
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
