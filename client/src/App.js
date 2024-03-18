import './App.css';
import image from './assets/LocAlert(LOGO).jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p className='text-red-600'>
          Work under Progress!!
        </p>
        {/* <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Creating...
        </a> */}
      </header>
    </div>
  );
}

export default App;
