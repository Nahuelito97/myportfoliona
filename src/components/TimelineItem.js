import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
      <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
          <h1 class="text-white text-xl font-medium py-2">{year}</h1>
          <h1 class="text-white text-xl font-medium py-2">{title}</h1>
          <p class="text-gray-100 sm:text-sm text-xs">
          {details}
          </p>
        </div>
      </div>
      <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-indigo-300"></div>
        <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
          1
        </div>
      </div>
      <div class="col-span-4 w-full h-full"></div>
    </div>
  );
}
export default TimelineItem;