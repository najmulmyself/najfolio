"use client";
import React, { useState } from 'react';
import ClientTweetCard from './tweet';
import { DATA } from '@/data';

import { Button } from './ui/button';

const TweetList = () => {
  const tweets = DATA.tweets;
  const [visibleCount, setVisibleCount] = useState(3);
  const handleShowMore = () => {
    setVisibleCount(prevCount => (prevCount === tweets.length ? 3 : tweets.length));
  };

  return (
    <div className="my-8 flex w-full flex-col space-y-4">
      {tweets.slice(0, visibleCount).map((id, index) => (
        <div key={id} >
          <ClientTweetCard 
            id={id} 
            className={`h-full w-72 min-w-72 ${index < 2 ? 'hidden md:block' : ''}`}
          />
        </div>
      ))}

      {visibleCount < tweets.length && (
        <div className='flex items-center justify-center -mt-32'>
          <Button onClick={handleShowMore} variant="secondary">Show More</Button>
        </div>
      )}
    </div>
  );
};

export default TweetList;
