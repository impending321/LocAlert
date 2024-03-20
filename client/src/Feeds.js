import React from 'react';

function Feeds() {
  // Dummy data for feeds
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

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Feeds</h2>
      <div className="grid gap-4">
        {feeds.map(feed => (
          <div key={feed.id} className="p-4 border border-logodark rounded-md">
            <h3 className="text-lg font-semibold mb-2">{feed.title}</h3>
            <p className="text-logodark mb-2">Posted by {feed.author}</p>
            <div className="flex items-center text-logodark">
              <p className="mr-4">{feed.upvotes} Upvotes</p>
              <p>{feed.comments} Comments</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Feeds };
