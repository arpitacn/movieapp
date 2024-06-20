import React from "react";
import MovieList from "../../../components/MovieList";
interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

//@ts-ignore
const MovieType: React.FC = async ({ params }: { params: any }) => {
  console.log(params, "params");
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <MovieList type={params.type} searchName={"all"} />
    </div>
  );
};
export default MovieType;
