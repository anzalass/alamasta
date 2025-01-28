'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  category?: string;
  onCardClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, category, onCardClick }) => {
  return (
    <div
      onClick={onCardClick}
      className="relative bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300 cursor-pointer"
    >
      {imageSrc && (
        <div className="relative w-full h-56">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-secondary to-transparent">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-gray-200 mt-2">{description}</p>
        <p className="text-gray-200 mt-2">{category}</p>
      </div>
    </div>
  );
};

export default Card;
