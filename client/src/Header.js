import image from './assets/LocAlert(LOGO).jpg';
import font from './assets/loc(Font).png';

import { MapIcon, UserIcon } from '@heroicons/react/outline';

function Header() {
    const handleUserIcon = (event) => {
      event.preventDefault()
      console.log("user icon clicked")
    }
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
          <p className='text-logodark text-lg mr-4 sm:mr-4'>{formattedDate}</p>
          <form className="flex">
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
