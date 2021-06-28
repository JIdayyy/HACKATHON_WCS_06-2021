import { useState } from 'react';

export default function SearchBar() {
  const [onSearch, setOnSearch] = useState('');

  return (
    <form className="flex justify-center sm:justify-start">
      <input
        onChange={(e) => setOnSearch(e.target.value)}
        type="search"
        placeholder="Search"
        className="sm:w-4/12 w-11/12 h-11 ml-4 rounded-lg py-5 focus:outline-none outline-none text-white bg-white bg-opacity-20 px-4"
      />
      <button type="submit" className="bg-transparent">
        <img className="object-cover  transform -translate-x-11 w-7 " src="/vector.svg"></img>
      </button>
    </form>
  );
}
