import React from 'react';
import Banner from '../components/banner/Banner';
import SummaryCards from '../components/summaryCard/SummaryCards';
import Friends from '../components/friends/Friends';

const Home = () => {
    return (
        <div>
            <h2>This will be the Homepage</h2>
            <Banner />
            <SummaryCards />
            <Friends />
        </div>
    );
};

export default Home;