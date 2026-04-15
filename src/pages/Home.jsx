import React, { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner';
import SummaryCards from '../components/summaryCard/SummaryCards';
import Friends from '../components/friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-[#2d6a4f]"></span>
      </div>
    );
  }
    return (
        <div>
            <Banner />
            <SummaryCards friends={friends}/>
            <Friends friends={friends}/>
        </div>
    );
};

export default Home;