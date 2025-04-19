import React, { useState } from 'react';
import bannerImg from '../../assets/banner.png';
import Button from '../ui/Button';

const Banner = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="flex flex-col py-12 items-center">
      <img className="md:w-1/3" src={bannerImg} />
      <h1 className="text-5xl text-center md:text-7xl font-thin">
        Browse, Search, View, Buy
      </h1>
      <p className="text-center md:w-2/3 my-4 text-gray-600">
        Best place to browse, search, view details and purchase of top flagship
        phones of the current time - FlagshipFaceOff
      </p>

      <form
        onSubmit={e => {
          handleSearch(e, searchText);
          setSearchText('');
          window.scrollTo(0, 400);
        }}
        className="flex flex-col md:flex-row justify-center gap-2 w-full items-center"
      >
        <input
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="bg-white px-4 h-12 border border-gray-300 rounded-md focus:outline-gray-300 w-full md:w-3/5 text-center"
          type="text"
          placeholder="Search Phone By Name"
        />
        <Button label="Search" />
      </form>
    </div>
  );
};

export default Banner;
