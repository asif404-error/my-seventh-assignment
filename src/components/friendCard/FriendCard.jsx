import React from "react";
import { useNavigate } from "react-router";

const FriendCard = ({ friend }) => {
    const navigate = useNavigate();

  const getStatusClass = (status) => {
    if (status === "Overdue") return "bg-red-500 text-white";
    if (status === "On-Track") return "bg-green-900 text-white";
    if (status === "Almost Due") return "bg-yellow-500 text-white";
    return "bg-gray-100 text-gray-600";
  };
  return (
    <div
      className="p-4 rounded-lg text-center shadow cursor-pointer hover:shadow-md transition bg-white"
      onClick={() => navigate(`/friend/${friend.id}`)}
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full mx-auto mb-2"
      />
      <h3 className="font-semibold">{friend.name}</h3>
      <p className="text-sm text-gray-500">{friend.days_since_contact} days ago</p>
      <div className="flex justify-center gap-1 mt-2 flex-wrap">
        {friend.tags.map((tag, index) => (
          <span key={index} className="text-xs font-semibold bg-green-200 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className={`mt-2 text-xs font-medium px-3 py-1 rounded-full inline-block ${getStatusClass(friend.status)}`}>
        {friend.status}
      </p>
    </div>
  );
};

export default FriendCard;


// Image/Picture imported from randomuser.me/photos website