import React from "react";
import FriendCard from "../friendCard/FriendCard";

const Friends = ({ friends }) => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        Your Friends
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
