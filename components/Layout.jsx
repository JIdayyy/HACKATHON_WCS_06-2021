import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Layout({page,children}) {
    return(
        <div className='w-full flex flex-col  min-h-screen'>
            <Head>
                <title>{page}</title>
            </Head>
            <Navbar />
            {children}
        </div>
    )
};
