import { PhotographIcon, PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import image from './assets/LocAlert(LOGO).jpg';

function CreatePost() {
    const handlePost = (event) => {
      event.preventDefault()
      console.log(inputs)
    }
    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
      setInputs(values => ({ ...values, [name]: value }));
    };
    return (
      <div className='px-6 py-4'>
        <div className='border-solid border-2 border-logodark rounded-md bg-logoyellow flex items-center'>
          <div>
            <img src={image} alt="logo" className="w-12 h-12 m-2 sm:m-4" />
          </div>
          <form action='' className='flex items-center w-full' onSubmit={handlePost}>
            <input type='text' name='content' value={inputs.content || ""} className='bg-logodark border-2 
            rounded-md p-2 w-full text-logowhite' placeholder='New Post' onChange={handleChange}></input>
            <label htmlFor="file-upload" className="cursor-pointer">
              <PhotographIcon className="h-8 w-8 sm:h-8 sm:w-8 ml-6 text-logowhite" />
            </label>
            <input id="file-upload" type='file' name='image' className="hidden" onChange={handleChange}></input>
            <button type="submit" className="h-8 w-8 sm:h-8 sm:w-8 m-6">
                <PlusIcon className="text-logowhite" />
            </button>
          </form>
        </div>
      </div>
    )
  }

export {CreatePost};