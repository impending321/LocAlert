import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from "./UserContext.js";

function RecentNotifications() {
  const user = useContext(UserContext);
  const [notif, setNotif] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/notif', {
      params: {
        author: user.username
      }
    }).then(res => {
      setNotif(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, [])

  return (
    <div className="bg-gray-50 shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
      {notif.map(notification => (
        <div key={notification._id} className="mb-4 bg-white border border-gray-300 rounded-lg p-4">
          <p className="text-gray-700 mb-1 font-semibold">{notification.by} liked your post</p>
          <p className="text-sm text-gray-500 font-body">
            {formatDate(notification.date)}
          </p>
        </div>
      ))}
    </div>
  );
}

function formatDate(dateString) {
  const currentDate = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

export { RecentNotifications };
