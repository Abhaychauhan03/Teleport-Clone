import React from "react";
import Search from "./Search";
import Card from "./Card";

function Body() {
  return (
    <div className="flex flex-grow justify-center p-2">
      <div className="w-full max-w-4xl">
        <div className="px-2 md:px-0">
          <div className="flex items-center justify-start border-b-2 font-semibold text-xl text-gray-600 h-16">
            Welcome to Teleport!
          </div>
          <div className="w-full h-20 flex items-center">
            <Search />
          </div>
        </div>
        <div className="bg-white border-2 md:mt-5 rounded-md">
          <div className="w-full h-14 flex items-center justify-start p-4 border-b-2">
            <h2 className="text-lg text-gray-600">
              Submitted applications (5)
            </h2>
          </div>
          <div>
            <Card no={1} />
            <Card no={2} />
            <Card no={3} />
            <Card no={4} />
            <Card no={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
