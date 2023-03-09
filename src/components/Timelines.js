import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import content from "../content";

function Timelines() {
  return (
    <div
      style={{
        background: "#eee",
      }}
      className=" min-h-screen  flex justify-center items-center  "
      id="timeline"
    >
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w2/12">
          <h1 className="text-5xl font-dosis font-bold text-center">
            <Title></Title>
          </h1>
          <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            <div class="col-span-4 w-full h-full ">
              <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 class="text-white text-xl font-medium py-2">
                  Full Stack Developer. 🖥️
                </h1>
                <h2 class="text-white text-xl font-medium py-2">Today</h2>
                <p class="text-gray-100 sm:text-sm text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  corporis consequuntur voluptate nulla iusto quam ut quasi,
                  eaque quas omnis vero totam ullam, reprehenderit ratione
                  pariatur accusamus suscipit odit nostrum?
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
            <div class="col-span-4 w-full h-full"></div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-indigo-300"></div>
              <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                2
              </div>
            </div>
            <div class="col-span-4 w-full h-full ">
              <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 class="text-white text-xl font-medium py-2">
                  Academic Training | National University of Missions 🏛
                </h1>
                <h3 class="text-white text-xl font-medium py-3">
                  Faculty of Exact Chemical and Natural Sciences UNaM
                </h3>
                <p class="text-gray-100 sm:text-sm text-xs">
                  Computer Systems Analyst | 2015 - Present
                </p>
              </div>
            </div>

            <div class="col-span-4 w-full h-full ">
              <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 class="text-white text-xl font-medium py-2">
                  Academic Training | National University of Missions 🏛
                </h1>
                <h3 class="text-white text-xl font-medium py-3">
                  Faculty of Exact Chemical and Natural Sciences UNaM
                </h3>
                <p class="text-gray-100 sm:text-sm text-xs">
                  Bachelor of Information Systems | 2015 - Present
                </p>
              </div>
            </div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-indigo-300"></div>
              <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                3
              </div>
            </div>
            <div class="col-span-4 w-full h-full"></div>
            <div class="col-span-4 w-full h-full"></div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-indigo-300"></div>
              <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                4
              </div>
            </div>
            <div class="col-span-4 w-full h-full ">
              <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                <h1 class="text-white text-xl font-medium py-2">
                  Academic Training | National University of Missions 🏛
                </h1>
                <h3 class="text-white text-xl font-medium py-3">
                  Faculty of Exact Chemical and Natural Sciences UNaM
                </h3>
                <p class="text-gray-100 sm:text-sm text-xs">
                  University Teaching Staff in Computing | 2021 - Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timelines;
