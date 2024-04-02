import React from 'react';

function Categories({setCategory}) {
  // Dummy data for categories
  const categories = ["Road Problems", "Sewage Problems", "Electricity Problems", "Water Supply Issues", "Public Transportation", "Healthcare Services"];
  const values = ["road", "sewage", "electricity", "waterSupply", "transportation", "healthcare"];
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="text-gray-700 hover:text-gray-900 mb-2 cursor-pointer">
            <button type='button' value={values[index]} onClick={e => setCategory(values[index])}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export{Categories};
