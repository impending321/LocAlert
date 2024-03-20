import React from 'react';

function RecentNotifications() {
  // Dummy data for recent notifications
  const notifications = [
    {
      id: 1,
      message: "New message from John Doe",
      time: "5 minutes ago"
    },
    {
      id: 2,
      message: "Jane Smith liked your post",
      time: "1 hour ago"
    },
    {
      id: 3,
      message: "Alice Johnson mentioned you in a comment",
      time: "2 hours ago"
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
      {notifications.map(notification => (
        <div key={notification.id} className="mb-4">
          <p className="text-gray-700 mb-1">{notification.message}</p>
          <p className="text-sm text-gray-500">{notification.time}</p>
        </div>
      ))}
    </div>
  );
}

export {RecentNotifications};
