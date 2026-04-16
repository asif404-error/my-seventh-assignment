import React from "react";
import text from "../../assets/text.png"
import call from "../../assets/call.png"
import video from "../../assets/video.png"
import { FiClock } from "react-icons/fi";
import { toast } from "react-toastify";

const FriendDetailsR = ({ friend, interactions, setInteractions }) => {
  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setInteractions([newEntry, ...interactions]);
    toast.success(`${type} with ${friend.name} logged!`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">
            {friend.days_since_contact}
          </p>
          <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{friend.goal}</p>
          <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">
            {friend.next_due_date}
          </p>
          <p className="text-xs text-gray-500 mt-1">Next Due</p>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-gray-800">Relationship Goal</p>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Edit
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Connect every <span className="font-bold">{friend.goal} days</span>
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="font-semibold text-gray-800 mb-3">Quick Check-In</p>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleCheckIn("Call")}
            className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg py-3 hover:bg-gray-50 text-sm text-gray-700"
          >
            <img src={call} alt="telephone-logo" className="size-8" /> Call
          </button>
          <button
            onClick={() => handleCheckIn("Text")}
            className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg py-3 hover:bg-gray-50 text-sm text-gray-700"
          >
            <img src={text} alt="text-box" className="size-8" /> Text
          </button>
          <button
            onClick={() => handleCheckIn("Video")}
            className="flex flex-col items-center gap-1 border border-gray-200 rounded-lg py-3 hover:bg-gray-50 text-sm text-gray-700"
          >
            <img src={video} alt="video-logo" className="size-8" /> Video
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <p className="font-semibold text-gray-800">Recent Interactions</p>
          <button className="text-xs text-gray-500 flex items-center gap-1 hover:text-gray-700">
            <FiClock size={12} /> Full History
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {interactions.length === 0 ? (
            <p className="text-sm text-gray-400">No interactions yet.</p>
          ) : (
            interactions.slice(0, 5).map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    {item.type === "Call" && <img src={call} alt="telephone-logo" className="size-6" />}
                    {item.type === "Text" && <img src={text} alt="text-box" className="size-6" />}
                    {item.type === "Video" && <img src={video} alt="video-logo" className="size-6" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {item.type}
                    </p>
                    <p className="text-xs text-gray-400">{item.title}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsR;
