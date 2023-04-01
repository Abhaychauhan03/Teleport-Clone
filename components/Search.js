import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

function Search() {
  return (
    <div className="flex-grow">
      <div className="w-full h-10 bg-white flex items-center border-2 py-2 rounded-md md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={"Search by name, country"}
        />
        <MagnifyingGlassIcon className="inline-flex h-8 text-black rounded-full p-2 cursor-pointer mx-2" />
      </div>
    </div>
  );
}

export default Search;
