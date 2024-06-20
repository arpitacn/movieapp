'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
interface MovieCardProps {
    movie: {
      Poster?: string;
      Title?: string;
      Year?: string;
      imdbID?: string;
      Plot?: string;  
      Rating?: string; 
      Runtime?: string; 
      Genre?: string; 
      ReleaseDate?: string;
    };
  }
  

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const router = useRouter();
  
    return (
        <div 
            className="relative p-4 cursor-pointer bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur" 
            onClick={() => router.push(`/movie/${movie.imdbID}`)}
            title={movie.Title}
        >
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-lg" />
            
            <h3 className="truncate-multiline text-[#eceef5] text-[20px] mt-3 font-bold">{movie.Title}</h3>
            <p className="text-gray-400 mt-2">{movie.Year}</p>
        </div>
    );
}

export default MovieCard;
