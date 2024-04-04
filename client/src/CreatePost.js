import React, { useState, useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import UserContext from "./UserContext.js";
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const CreatePost = ({ setCreatePost }) => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const user = useContext(UserContext);
  useEffect(() => {
    axios.get('http://localhost:4000/location', {withCredentials: true})
    .then(res => setLocation(res.data.location))
  }, []);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('author', user.username);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('image', photo);
    axios.post('http://localhost:4000/posts', formData, { withCredentials: true }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(location);
    setCategory('');
    setLocation(null);
    setPhoto(null);
    setDescription('');
    setCreatePost(false);
  };

  {/*const MarkLocation = () => {
    // eslint-disable-next-line
    const map = useMapEvents({
      dblclick(e) {
        setLocation(e.latlng);
        // You can send the location to the database here
        // Example: sendLocationToDatabase(e.latlng);
      },
    });
    return location === null ? null : <Marker position={location} />;
  };*/}

  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-orange-400 flex justify-center items-center">
      <div className=" bg-white rounded-lg p-8 max-w-md w-full shadow-md">
        <h2 className="text-2xl font-bold text-rgb(71,73,81) mb-4">Report your Problem</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">
              Select Problem Category
            </label>
            <select
              id="category"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="road">Road</option>
              <option value="electricity">Electricity</option>
              <option value="sewage">Sewage</option>
              <option value="waterSupply">Water Supply</option>
              <option value="transportation">Transportation</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          {/*<div className="mb-4">
            <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2">
              Mark Location on Map
            </label>
            <div style={{ height: '300px' }} className="mb-2">
              <MapContainer center={[0, 0]} zoom={2} className="w-full h-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkLocation />
              </MapContainer>
  </div>
          </div>*/}
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-bold text-gray-700 mb-2">
              Upload Photo/Video
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {photo && (
              <div className="mt-2">
                <img src={URL.createObjectURL(photo)} alt="Uploaded" className="max-w-full h-auto" />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2">
              Description Of Problem
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Description"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-rgb(255,139,31) hover:bg-orange-600 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;