import React from 'react';

function Feeds() {
  // Dummy data for categories, feeds, and nearby cities
  const categories = ["Road Problems", "Sewage Problems", "Electricity Problems"];
  const feeds = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      author: "John Doe",
      upvotes: 24,
      comments: 5
    },
    {
      id: 2,
      title: "Consectetur adipiscing elit",
      author: "Jane Smith",
      upvotes: 12,
      comments: 8
    },
    {
      id: 3,
      title: "Sed do eiusmod tempor incididunt",
      author: "Alice Johnson",
      upvotes: 36,
      comments: 10
    }
  ];
  const nearbyCities = ["City A", "City B", "City C"];

  return (
    <div className="container mx-auto mt-8 grid grid-cols-3 gap-8">
      {/* Left Section - Categories */}
      <div className="col-span-1 bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="text-gray-700 hover:text-gray-900 mb-2 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Center Section - Latest Feeds */}
      <div className="col-span-1 bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Latest Feeds</h2>
        {feeds.map(feed => (
          <div key={feed.id} className="mb-4">
            <h3 className="text-base font-semibold mb-2 text-gray-800">{feed.title}</h3>
            <p className="text-gray-600 mb-1">Posted by {feed.author}</p>
            <div className="flex items-center text-gray-600">
              <p className="mr-4">{feed.upvotes} Upvotes</p>
              <p>{feed.comments} Comments</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section - Nearby Cities */}
      <div className="col-span-1 bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Nearby Cities</h2>
        <ul>
          {nearbyCities.map((city, index) => (
            <li key={index} className="text-gray-700 hover:text-gray-900 mb-2 cursor-pointer">
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export {Feeds};
