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
        <div className="w-full md:w-7/12">
          <Title>Timeline 🚀</Title>
          {timeline.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timelines;
