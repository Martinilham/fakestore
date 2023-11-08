import React from 'react';

const Card = (props) => {
    const {judul,deskripsi} = props
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <image src="" alt="Card Image" className="w-full" ></image>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{judul}</div>
        <p className="text-gray-700 text-base">
          {deskripsi}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag2
        </span>
      </div>
    </div>
  );
};

export default Card;
