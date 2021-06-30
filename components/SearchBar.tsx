import { useState } from "react";
import router from "next/router";

export default function SearchBar() {
  const [onSearch, setOnSearch] = useState("");

  const handleSubmit = async () => {
    router.push(`/search/${onSearch}`);
  };

  return (
    <form className="flex justify-start sm:justify-center mt-5 sm:mt-0  w-full" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setOnSearch(e.target.value)}
        type="search"
        placeholder="Search"
        className="sm:w-6/12 w-full h-11 rounded-lg py-5 focus:outline-none outline-none text-white bg-white shadow-inputShadow bg-opacity-20 px-4"
      />
    </form>
  );
}
