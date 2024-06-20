import React from "react";
import { PiStarBold } from "react-icons/pi";
import { omdb_api_key } from "../../../utils/common";
const MovieDetails: React.FC = async ({ params }: any) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${params.id}&apikey=${omdb_api_key}`,
    { cache: "no-store" }
  );
  let movie = await response.json();
  console.log(movie, 'SINGLE');

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 relative pb-[100px]">
      <div className="block w-full relative min-h-[400px] rounded-[50px]" style={{ backgroundImage: `url(${movie.Poster})` }}>
        <div className=" bg-[#13192b] absolute top-0 left-0 w-full min-h-[400px] rounded-[50px] opacity-50 z-[1]" />
      
        <div className="inline-block py-[40px] px-[70px] bg-[#13192b] absolute z-[2] bottom-[-70px] left-[120px] rounded-[20px] bg-opacity-70 shadow-lg backdrop-blur">
          <p className="text-[#9f9bd6] mb-4">{movie.Language}</p>
          <h1 className="text-[30px] text-white font-bold">{movie.Title}</h1>
        </div>
      </div>

      <div className="mt-[200px] px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 md:gap-x-11">
          <div className="">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-[50px]" />
          </div>
          <div className="">
            <h2 className="text-[30px] font-bold mb-[26px]">{movie.Awards}</h2>
            <p className="text-[24px] text-[#878ea2] mb-[30px]">{movie.Plot}</p>

            <div className="mb-[30px] p-4 rounded-xl bg-[#090b12] flex justify-start items-center gap-3 text-[#fdad47] w-[105px]">
              <PiStarBold size={23} color={'#fdad47'} />
              <span className="text-[22px]">{movie.imdbRating}</span>
            </div>

            <div className="mb-[30px]">
              <p className="text-[20px] text-[#878ea2]">Type</p>
              <p className="text-[22px] text-[#bcc1ce]">{movie.Type}</p>
            </div>

            <div className="mb-[30px]">
              <p className="text-[20px] text-[#878ea2]">Release Date</p>
              <p className="text-[22px] text-[#bcc1ce]">{movie.Released}</p>
            </div>

            <div className="mb-[30px]">
              <p className="text-[20px] text-[#878ea2]">Runtime</p>
              <p className="text-[22px] text-[#bcc1ce]">{movie.Runtime}</p>
            </div>

            <div className="mb-[30px]">
              <p className="text-[20px] text-[#878ea2]">Genre</p>
              <p className="text-[22px] text-[#bcc1ce]">{movie.Genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
