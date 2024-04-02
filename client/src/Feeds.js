import React, { useEffect, useState, useContext } from 'react';
import UserContext from './UserContext';
import axios from 'axios';
import { ThumbUpIcon } from '@heroicons/react/outline';

function Feeds({ category, location }) {
  const user = useContext(UserContext);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get('http://localhost:4000/posts', {
        params: {
          category: category,
          location: location
        }
      }).then(res => {
        setFeeds(res.data);
      }).catch(e => {
        console.log(e);
      });
    }
    fetchPosts();
  }, [location, category]);

  const handleLike = (feed) => {
    if (user.username !== feed.author) {
      const data = { id: feed._id, username: user.username };
      axios.post('http://localhost:4000/likes', data, { withCredentials: true })
        .then(res => {
          console.log('done');
        }).catch(e => {
          console.log(e);
        });
      axios.post('http://localhost:4000/notif', data, { withCredentials: true })
        .then(res => {
          console.log('liked');
        }).catch(err => {
          console.log(err);
        });
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Feeds</h2>
      <div className="grid gap-4">
        {feeds.map(feed => (
          <div key={feed._id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{feed.description}</h3>
            <p className="text-gray-700 mb-2">Posted by {feed.author}</p>
            {feed.image && <img src={`http://localhost:4000/${feed.image.filename}`} alt="Image" className="mb-2 rounded-md" />}
            <div className="flex items-center text-gray-700">
              <p>{feed.likes}</p>
              <button type='button' className="h-6 w-6 m-1 border border-gray-300 rounded-full" onClick={() => handleLike(feed)}>
                <ThumbUpIcon className='text-gray-700' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Feeds };
