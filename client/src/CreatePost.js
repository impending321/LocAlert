import React, { useState } from 'react';
import { PhotographIcon, PaperAirplaneIcon } from '@heroicons/react/outline';

function CreatePost({setCreatePost}) {
  const [inputs, setInputs] = useState({});

  const handlePost = (event) => {
    event.preventDefault();
    setCreatePost(false)
    console.log(inputs);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <div className='w-full p-4 border-b border-logodark'>
        <form className="flex items-center w-full px-40 py-4" onSubmit={handlePost}>
          <div className="relative w-full">
            <input
              type="text"
              name="content"
              value={inputs.content || ""}
              className="bg-gray-100 border border-logodark py-2 px-4 rounded-md w-full focus:outline-none pl-10"
              placeholder="What's on your mind?"
              onChange={handleChange}
            />
            <label htmlFor="file-upload" className="absolute left-2 top-2 cursor-pointer">
              <PhotographIcon className="h-6 w-6 text-logodark" />
            </label>
            <input id="file-upload" type="file" name="image" className="hidden" onChange={handleChange} />
            <button type="submit" className="absolute right-2 top-2" >
              <PaperAirplaneIcon className="h-6 w-6 text-logodark" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { CreatePost };
