import './App.css';
import {Header} from "./Header.js"
import { CreatePost } from './CreatePost.js';
import {Feeds} from "./Feeds.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <CreatePost/>
      <Feeds/>
    </div>
  );
}

export default App;
