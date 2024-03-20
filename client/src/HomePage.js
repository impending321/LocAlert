import {Header} from "./Header.js"
import {Feeds} from "./Feeds"
import {RecentNotifications} from "./RecentNotifications.js"
import { Categories } from './Categories.js';

function HomePage() {
    return (
      <div className="App">
        <Header/>
        <div className="container mx-auto mt-8 flex">
        {/* Categories Section */}
        <div className="w-1/4 pr-8">
          <Categories />
        </div>
  
        {/* Feeds Section */}
        <div className="w-2/4 pr-8">
          <Feeds />
        </div>
  
        {/* Recent Notifications Section */}
        <div className="w-1/4">
          <RecentNotifications />
        </div>
      </div>
      </div>
    );
  }
  
  export default HomePage;