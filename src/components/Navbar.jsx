
import React from 'react';
import SearchBar from './Search';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-blue-600 text-2xl font-custom">Toko Abal-abal</a>
        <div className='mx-auto'>
            <SearchBar/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
