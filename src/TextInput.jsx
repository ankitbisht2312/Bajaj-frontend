import React, { useState } from 'react';

function TextInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(input);
      setError('');
      onSubmit(parsedData);
    } catch (e) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <div className="text-input">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON like {"data":["A","B","C"]}'
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default TextInput;
