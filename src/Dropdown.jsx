import React, { useState } from 'react';

function Dropdown({ onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const options = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedOptions(options);
    onChange(options);
  };

  return (
    <div className="dropdown">
      <label>Select Options:</label>
      <select multiple onChange={handleChange}>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highestLowercase">Highest Lowercase Alphabet</option>
      </select>
    </div>
  );
}

export default Dropdown;
