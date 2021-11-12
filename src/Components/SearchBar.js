import React from "react";
import reactDom from "react-dom";
const SearchBar = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex justify-center bg-white rounded-xl border-2 overflow-hidden h-8">
        <input
          type="search"
          placeholder="Search..."
          className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2"
        />
        <button type="submit">
          <svg className="h-6 w-6 my-auto m-2" fill="none" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
