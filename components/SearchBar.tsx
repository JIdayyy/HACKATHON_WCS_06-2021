import { useState } from 'react';

export default function SearchBar() {
  const [onSearch, setOnSearch] = useState('');

  return (
    <form className="flex flex-col sm:flex-row justify-star mt-5 sm:mt-0  w-full sm:w-8/12 sm:justify-start">
      <input
        onChange={(e) => setOnSearch(e.target.value)}
        type="search"
        placeholder="Search"
        className="sm:w-6/12 w-full h-11 rounded-lg py-5 focus:outline-none outline-none text-white bg-white bg-opacity-20 px-4"
      />
      <button type="submit" className="bg-transparent">
        <img className="object-cover transform -translate-x-11 w-6 " src="/vector.svg"></img>
      </button>
    </form>
  );
}
