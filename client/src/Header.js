import image from './assets/LocAlert(LOGO).jpg';
import font from './assets/loc(Font).png';
import { MapIcon, LogoutIcon, PlusIcon } from '@heroicons/react/outline';
import AuthContext from './AuthContext';
import UserContext from './UserContext';
import { useContext, useState, useRef } from 'react';
import axios from 'axios';

function Header({ handlePlusIcon, showCreatePost }) {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const [showCitiesDropdown, setShowCitiesDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const mapIconRef = useRef(null);

  const handleLogoutIcon = (event) => {
    event.preventDefault();
    user.setUser({});
    auth.setAuth(true);
  };

  const handleMapIcon = (event) => {
    event.preventDefault();
    setShowCitiesDropdown(!showCitiesDropdown);
  };

  const handleCitySelection = (city) => {
    const data = { username: user.username, location: city };
    console.log(data);
    axios.post('http://localhost:4000/changelocation', data, {withCredentials: true})
      .then(response => {
        setSelectedCity(city);
      })
      .catch(error => {
        console.error('Error changing location:', error);
      });
      setShowCitiesDropdown(false);
  };
  
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney']; // List of cities

  return (
    <div className="relative">
      <header className="flex justify-between items-center w-full h-16 sm:h-20 bg-logoyellow p-4 sm:p-6">
        <div className="flex items-center">
          <img src={image} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16 m-2 sm:m-4" />
          <img src={font} alt="font" className="w-36 sm:w-48 h-auto m-2 sm:m-4" />
          {/* <p className="text-logodark text-lg">LocAlert</p> */}
        </div>
        <div className="flex items-center ml-auto">
          <p className='text-logodark font-bold text-lg mr-4 sm:mr-4'>{formattedDate}</p>
         
          <form className="flex">
            {!showCreatePost && <button type="button" className="h-8 w-8 sm:h-8 sm:w-8 sm:mr-4" onClick={handlePlusIcon}>
              <PlusIcon className="text-logodark" />
            </button>}
            <button onClick={handleMapIcon} ref={mapIconRef} className='h-8 w-8 sm:h-8 sm:w-8 mr-2 sm:mr-4'>
              <MapIcon className="text-logodark" />
            </button>
            <button onClick={handleLogoutIcon} className="h-8 w-8 sm:h-8 sm:w-8">
              <LogoutIcon className="text-logodark" />
            </button>
          </form>
          <div className="ml-4 border border-logodark rounded-md p-1"> {/* Add border around the username */}
            <p className='text-logodark font-bold text-lg'>{user.username}</p>
          </div>
        </div>
      </header>
      {showCitiesDropdown && (
        <div
          className="absolute bg-white rounded shadow-md z-10"
          style={{
            top: mapIconRef.current.offsetTop + mapIconRef.current.offsetHeight + 'px',
            left: mapIconRef.current.offsetLeft + 'px',
          }}
        >
          <ul>
            {cities.map((city, index) => (
              <li key={index} onClick={() => handleCitySelection(city)} className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export { Header };
