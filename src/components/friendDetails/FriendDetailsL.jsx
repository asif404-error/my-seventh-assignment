import React from 'react';
import { FiArchive, FiClock, FiTrash2 } from 'react-icons/fi';

const getStatusClass = (status) => {
  if (status === "Overdue") return "bg-red-500 text-white";
  if (status === "On-Track") return "bg-green-900 text-white";
  if (status === "Almost Due") return "bg-yellow-500 text-white";
  return "bg-gray-100 text-gray-600";
};

const FriendDetailsL = ({friend}) => {
    return (
        <div className="flex flex-col gap-4">
      <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <h2 className="font-bold text-lg text-gray-800">{friend.name}</h2>
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium mt-1 ${getStatusClass(friend.status)}`}
        >
          {friend.status}
        </span>
        <div className="flex flex-wrap justify-center gap-1 mt-3">
          {friend.tags.map((tag, ind) => (
            <span
              key={ind}
              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-3 italic">"{friend.bio}"</p>
        <p className="text-sm text-gray-500 mt-1">{friend.email}</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2">
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
          <FiClock /> Snooze 2 Weeks
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
          <FiArchive /> Archive
        </button>
        <button className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 px-4 py-2 rounded-md">
          <FiTrash2 /> Delete
        </button>
      </div>
    </div>
    );
};

export default FriendDetailsL;