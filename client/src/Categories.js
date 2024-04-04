import React from 'react';

function Categories({setCategory}) {
  // Dummy data for categories
  const categories = ["Road Problems", "Sewage Problems", "Electricity Problems", "Water Supply Issues", "Public Transportation", "Healthcare Services"];
  const values = ["road", "sewage", "electricity", "waterSupply", "transportation", "healthcare"];
  
  return (
    <div className="bg-white shadow-md rounded-md p-4 py-16">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-3">
            <button 
              type='button' 
              value={values[index]} 
              onClick={e => setCategory(values[index])}
              className="block w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-1200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Categories };
