import React from "react";
import FriendCard from "../friendCard/FriendCard";

const Friends = ({ friends }) => {
  return (
    <div className="px-4">
      <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
