import image from './assets/LocAlert(LOGO).jpg';
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
      <header className="flex justify-between items-center w-full h-[10vh] bg-logoyellow p-[2vh]">
        <div className="flex items-center">
          <img src={image} alt="logo" className="w-[10vh] h-w m-[2vh] ml-[0vh]" />
          <p className="text-logodark text-lg">LocAlert</p>
        </div>
        <div className="flex items-center">
        <p className='text-logodark text-lg ml-[60vh] mr-[2vh]'>{formattedDate}</p>
          <form className="flex">
            <button onClick={handleMapIcon} className='h-[10vh] w-[5vh] mr-[2vh]'>
              <MapIcon className=" text-logodark" />
            </button>
            <button onClick={handleUserIcon} className="h-[10vh] w-[5vh] mr-[2vh]">
              <UserIcon  className="text-logodark" />
            </button>
          </form>
        </div>
      </header>
    );
  }
  export {Header};