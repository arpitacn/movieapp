import React from "react";
import MovieList from "../../../../components/MovieList";

const SearchPage: React.FC = ({ params }: any) => {
  console.log(params, "search params");
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <MovieList type={"all"} searchName={params.searchName} />
    </div>
  );
};
export default SearchPage;
