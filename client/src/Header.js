import image from './assets/LocAlert(LOGO).jpg';
import font from './assets/loc(Font).png';
import { MapIcon, UserIcon, PlusIcon } from '@heroicons/react/outline';
import AuthContext from './AuthContext';
import UserContext from './UserContext';
import { useContext } from 'react';

function Header({ handlePlusIcon, showCreatePost }) {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const handleUserIcon = (event) => {
    event.preventDefault();
    auth.setAuth(true);
  };
  const handleMapIcon = (event) => {
    event.preventDefault()
    console.log("map icon clicked")
  }
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <header className="flex justify-between items-center w-full h-16 sm:h-20 bg-logoyellow p-4 sm:p-6">
      <div className="flex items-center">
        <img src={image} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16 m-2 sm:m-4" />
        <img src={font} alt="font" className="w-36 sm:w-48 h-auto m-2 sm:m-4" />
        {/* <p className="text-logodark text-lg">LocAlert</p> */}
      </div>
      <div className="flex items-center ml-auto">
        <p className='text-logodark font-bold text-lg mr-4 sm:mr-4'>{formattedDate}</p>
        <p className='text-logodark font-bold text-lg mr-4 sm:mr-4'>{user.username}</p>
        <form className="flex">
          {!showCreatePost && <button type="button" className="h-8 w-8 sm:h-8 sm:w-8 sm:mr-4" onClick={handlePlusIcon}>
            <PlusIcon className="text-logodark" />
          </button>}
          <button onClick={handleMapIcon} className='h-8 w-8 sm:h-8 sm:w-8 mr-2 sm:mr-4'>
            <MapIcon className="text-logodark" />
          </button>
          <button onClick={handleUserIcon} className="h-8 w-8 sm:h-8 sm:w-8">
            <UserIcon className="text-logodark" />
          </button>
        </form>
      </div>
    </header>
  );
}

export { Header };
