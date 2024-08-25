import React from 'react';

function Response({ data, selectedOptions }) {
  const filteredData = data.filter(item => {
    if (selectedOptions.includes('alphabets') && /^[a-zA-Z]$/.test(item)) return true;
    if (selectedOptions.includes('numbers') && /^\d$/.test(item)) return true;
    if (selectedOptions.includes('highestLowercase') && /[a-z]/.test(item)) {
      return item === Math.max(...data.filter(i => /[a-z]/.test(i)));
    }
    return false;
  });

  return (
    <div className="response">
      <h3>Filtered Data:</h3>
      <p>{filteredData.join(', ')}</p>
    </div>
  );
}

export default Response;
