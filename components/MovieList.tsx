'use client';
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import TabNav from "./Tabs";
import { tabs,omdb_api_key } from "../utils/common";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

interface MyComponentProps {
  type: string;
  searchName: string;
}

const MovieList: React.FC<MyComponentProps> = ({ type, searchName = "all" }) => {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${omdb_api_key}&s=${searchName}&type=${type === "all" ? "" : type}`,
          { cache: "no-store" }
        );
        const data = await response.json();
        if (data.Search) {
          setAllMovies(data.Search);
        } else {
          setAllMovies([]);
        }
      } catch (err) {
        setError("Failed to fetch movies");
      }
    };

    fetchMovies();
  }, [type, searchName]);
  return (
    <>
      <TabNav type={type} />
      <h2 className="text-[#757e94] text-[28px] font-bold mb-6">
        {tabs.find((tab) => tab.id === type)?.label}
        <span className="text-[20px] font-normal">({allMovies.length})</span>
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mx-auto">
        {allMovies.length > 0 ? (
          allMovies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-center">No results found</p>
        )}
      </div>
    </>
  );
};

export default MovieList;
