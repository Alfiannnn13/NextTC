import React from 'react';
import Image from 'next/image';

interface CatProps {
  name: string;
  imgCat: string;
}

const Card = ({ name, imgCat }: CatProps) => {
  return (
    <div className="bg-white shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:bg-gray-100 rounded-xl">
      <div className="flex flex-col justify-between h-full">
        <div className="image-wrapper p-4">
          <div className="image-container mx-auto">
            <img
              src={imgCat}
              alt={name}
              className="rounded-t-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center pb-4">
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
