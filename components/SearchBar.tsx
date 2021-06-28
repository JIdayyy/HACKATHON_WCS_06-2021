interface IProps {
  ressource: Array<object>;
}
import Image from 'next/image'
export default function SearchBar({ ressource }: IProps) {
  return (
    <form className="flex">
      <input type="search" placeholder="Search" className="w-full focus:outline-none outline-none text-white border rounded-xl bg-blue-900 bg-opacity-20 px-4" />
      <button type="submit" className="bg-transparent">
        <img className="object-cover transform -translate-x-11 w-7" src="/search.png"></img>
      
      </button>
    </form>
  );
}
