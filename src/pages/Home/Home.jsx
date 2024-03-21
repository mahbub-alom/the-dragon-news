import React from 'react';
import Header from '../Shared/Header';
import NavBar from '../Shared/NavBar';
import LeftSideNav from '../Shared/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav';
import Marque from '../Shared/Marque';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './News/NewsCard';


const Home = () => {
    const news=useLoaderData()
    return (
        <div>
            <Header></Header>
            <Marque></Marque>
            <NavBar></NavBar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map((aNews,idx)=><NewsCard key={idx} news={aNews}></NewsCard> )
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;