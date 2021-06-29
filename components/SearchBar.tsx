import { useState } from 'react';

export default function SearchBar() {
  const [onSearch, setOnSearch] = useState('');

  return (
    <form className="flex  justify-start mt-5 sm:mt-0  w-full sm:w-7/12 sm:justify-start">
      <input
        onChange={(e) => setOnSearch(e.target.value)}
        type="search"
        placeholder="Search"
        className="sm:w-6/12 w-full h-11 rounded-lg py-5 focus:outline-none outline-none text-white bg-white bg-opacity-20 px-4"
      />
      <button type="submit" className="bg-transparent">
        <img className="object-cover transform mx-4 " src="/vector.svg"></img>
      </button>
    </form>
  );
}
