import './App.css';
import {Header} from "./Header.js"
import { CreatePost } from './CreatePost.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreatePost/>
    </div>
  );
}

export default App;
