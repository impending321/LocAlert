import React, { useState } from 'react';
import { PhotographIcon, PlusIcon } from '@heroicons/react/outline';

function CreatePost() {
    const [inputs, setInputs] = useState({});

    const handlePost = (event) => {
        event.preventDefault();
        console.log(inputs);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    return (
        <div className="flex items-center justify-center">
            <form className="flex items-center w-full" onSubmit={handlePost}>
                <div className="relative w-full">
                    <input
                        type="text"
                        name="content"
                        value={inputs.content || ""}
                        className="bg-gray-100 border border-gray-300 py-2 px-4 rounded-full w-full focus:outline-none pl-10"
                        placeholder="What's on your mind?"
                        onChange={handleChange}
                    />
                    <label htmlFor="file-upload" className="absolute left-2 top-2 cursor-pointer">
                        <PhotographIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                    </label>
                    <input id="file-upload" type="file" name="image" className="hidden" onChange={handleChange} />
                    <button type="submit" className="absolute right-2 top-2">
                        <PlusIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export { CreatePost };
