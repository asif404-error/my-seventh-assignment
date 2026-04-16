import React, { useEffect, useState } from "react";
import FriendDetailsL from "../components/friendDetails/FriendDetailsL";
import FriendDetailsR from "../components/friendDetails/FriendDetailsR";
import { useParams } from "react-router";
import { useTimeline } from "../context/TimelineProvider";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const { interactions, setInteractions } = useTimeline();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-[#2d6a4f]"></span>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500">Friend not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <FriendDetailsL friend={friend} />
        <FriendDetailsR
          friend={friend}
          interactions={interactions}
          setInteractions={setInteractions}
        />
      </div>
    </div>
  );
};

export default FriendDetails;
