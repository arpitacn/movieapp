"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { debounce } from "../utils/common"; // Adjust the path based on your folder structure

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const debouncedSearch = debounce((term: string) => {
    router.push(
      term.length ? `/home/search/${term.replace(/\s+/g, "")}` : `/home`
    );
  }, 500); // Adjust the debounce delay as needed

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="pt-[200px] pb-[180px] text-white">
      <div className="max-w-[600px] grid gap-y-3">
        <h1 className="text-[80px] font-bold">MaileHereko</h1>
        <p className="text-lg my-1 text-[#777e92]">
          List of movies and TV shows I,{" "}
          <span className="text-[#8983de]">Pramod Poudel</span> have watched
          till date. Explore what I have watched and also feel free to make a
          suggestion.
        </p>
        <div className="mt-4 relative w-[65%]">
          <span
            className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
            onClick={() => debouncedSearch(searchTerm)}
          >
            <IoSearchOutline size={30} color={"#777e92"} />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-12 pr-4 py-5 bg-gray-800 text-gray-200 rounded-lg border text-[18px] border-gray-600 focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search Movies or TV Shows"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                debouncedSearch(searchTerm);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
