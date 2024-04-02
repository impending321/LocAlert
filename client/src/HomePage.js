import { Header } from "./Header.js"
import { Feeds } from "./Feeds"
import { RecentNotifications } from "./RecentNotifications.js"
import { Categories } from './Categories.js';
import CreatePost from "./CreatePost.js";
import { useState, useContext, useEffect } from "react";
import AnimateIn from "./Animate.tsx"
import UserContext from "./UserContext.js";
import AuthContext from './AuthContext';
import axios from 'axios';

function HomePage() {
  const auth = useContext(AuthContext);
  const [showCreatePost, setCreatePost] = useState(false)
  const [location, setLocation] = useState(' ');
  const user = useContext(UserContext);
  const [category, setCategory] = useState('road');
  const handlePlusIcon = (event) => {
    event.preventDefault()
    setCreatePost(true)
  }
  useEffect(() => {
    axios.get('http://localhost:4000/location', { withCredentials: true })
      .then(res => {
        const receivedLocation = res.data.location;
        if (receivedLocation && receivedLocation.trim() !== '') {
          setLocation(receivedLocation);
        }
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  }, [location]);
  return (
    <div className="App">
      <Header handlePlusIcon={handlePlusIcon} showCreatePost={showCreatePost} />
      {showCreatePost && (
        <div>
          <AnimateIn
            from="opacity-0 -translate-y-4"
            to="opacity-100 translate-y-0 translate-x-0"
            duration={1000}
          >
            <CreatePost setCreatePost={setCreatePost} />
          </AnimateIn>
        </div>
      )}
      {!showCreatePost && (
        <div className="container mx-auto mt-8 flex">
          <div className="w-1/4 pr-8">
            <AnimateIn
              from="opacity-0 -translate-x-32"
              to="opacity-100 translate-y-0 translate-x-0"
              delay="500"
            >
              <Categories setCategory={setCategory}/>
            </AnimateIn>
          </div>
          <div className="w-2/4 pr-8">
            <AnimateIn
              from="opacity-0 -translate-y-4"
              to="opacity-100 translate-y-0 translate-x-0"
              delay="200"
            >
              <Feeds category={category} location={location}/>
            </AnimateIn>
          </div>
          <div className="w-1/4">
            <AnimateIn
              from="opacity-0 translate-x-32"
              to="opacity-100 translate-y-0 translate-x-0"
              delay="500"
            >
              <RecentNotifications />
            </AnimateIn>
          </div>
        </div>
      )}
    </div>

  );
}

export default HomePage;
