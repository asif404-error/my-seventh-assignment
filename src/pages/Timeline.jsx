import React, { useState } from "react";
import { useTimeline } from "../context/TimelineProvider";
import call from "../assets/call.png";
import text from "../assets/text.png";
import video from "../assets/video.png";

const getIcon = (type) => {
  if (type === "Call")
    return <img src={call} alt="call-logo" className="size-6" />;
  if (type === "Text")
    return <img src={text} alt="texbox-logo" className="size-6" />;
  if (type === "Video")
    return <img src={video} alt="video-logo" className="size-6" />;
  return <img src={text} alt="texbox-logo" className="size-6" />;
};

const Timeline = () => {
  const { interactions } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? interactions
      : interactions.filter((item) => item.type === filter);

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Timeline</h1>
        <select
          className="select select-bordered text-sm mb-6 w-48"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
        <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-400 p-6">No interactions yet.</p>
          ) : (
            filtered.map((item) => (
              <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                <div className="w-8 flex justify-center">
                  {getIcon(item.type)}
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">{item.type}</span> with{" "}
                    {item.friendName}
                  </p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
