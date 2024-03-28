import { Header } from "./Header.js"
import { Feeds } from "./Feeds"
import { RecentNotifications } from "./RecentNotifications.js"
import { Categories } from './Categories.js';
import CreatePost from "./CreatePost.js";
import { useState, useContext } from "react";
import AnimateIn from "./Animate.tsx"
import UserContext from "./UserContext.js";
import AuthContext from './AuthContext';

function HomePage() {
  const auth = useContext(AuthContext);
  const [showCreatePost, setCreatePost] = useState(false)
  const user = useContext(UserContext);
  const handlePlusIcon = (event) => {
    event.preventDefault()
    setCreatePost(true)
  }
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
              <Categories />
            </AnimateIn>
          </div>
          <div className="w-2/4 pr-8">
            <AnimateIn
              from="opacity-0 -translate-y-4"
              to="opacity-100 translate-y-0 translate-x-0"
              delay="200"
            >
              <Feeds />
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
