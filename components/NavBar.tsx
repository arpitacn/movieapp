import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="text-white flex justify-between items-center py-4">
        <div>
          <Link href={"/home"}>
            <Image src="/images/logo.png" width={46} height={32} alt="logo" />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/home/movie"
            className="text-white px-4 hover:text-gray-300"
          >
            Movies
          </Link>
          <Link
            href="/home/series"
            className="text-white px-4 hover:text-gray-300"
          >
            TV Shows
          </Link>
          <Link
            href="/home/all"
            className="text-white px-4 hover:text-gray-300"
          >
            Suggest me
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
