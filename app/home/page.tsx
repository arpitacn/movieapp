import React from "react";
import MovieList from "../../components/MovieList";

const Home: React.FC = ({}) => {
  return (
    <div className="min-h-screen text-white">
      <MovieList type={"all"} searchName={"all"} />
    </div>
  );
};

export default Home;
