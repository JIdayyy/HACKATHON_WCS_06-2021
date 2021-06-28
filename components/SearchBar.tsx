import {useState} from 'react'


interface IProps {
  ressource: Array<object>;
}

export default function SearchBar({ ressource }: IProps) {
const [onSearch, setOnSearch] = useState(null)

  return (
    <form className="flex">
      <input onChange={(e) => setOnSearch(e.target.value)} type="search" placeholder="Search" className="w-full focus:outline-none outline-none text-white border rounded-xl bg-blue-900 bg-opacity-20 px-4" />
      <button type="submit" className="bg-transparent">
        <img className="object-cover transform -translate-x-11 w-7" src="/search.png"></img>
      
      </button>
    </form>
  );
}
