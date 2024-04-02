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
      console.log(notif);
      setNotif(res.data);
    }).catch(err => {
      console.log(err);

    });
  },[])
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
      {notif.map(notification => (
        <div key={notification._id} className="mb-4">
          <p className="text-gray-700 mb-1">{notification.by} liked your post</p>
          <p className="text-sm text-gray-500">{notification.date}</p>
        </div>
      ))}
    </div>
  );
}

export { RecentNotifications };
