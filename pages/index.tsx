import Head from 'next/head'
import Group_Card from '../components/Group_Card'
export default function Home():JSX.Element {
  return (
    <div className="flex flex-col w-full  items-center justify-center min-h-screen py-2">
      <Group_Card/>
    </div>
  )
}
