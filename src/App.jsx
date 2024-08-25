import React, { useState } from 'react';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import Response from './Response';
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState([]);
  const [response, setResponse] = useState([]);

  const handleSubmit = async (inputData) => {
    setData(inputData);
    
    // Call your REST API here with the input data
    try {
      const res = await fetch('http://your-api-endpoint.com/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
      const apiResponse = await res.json();
      setResponse(apiResponse.data); // Assuming the response is in the format { data: [...] }
    } catch (error) {
      console.error('Error calling the API:', error);
    }
  };

  // Set the website title to your roll number
  document.title = "Your_Roll_Number";

  return (
    <div className="container">
      <h1>Data Processor</h1>
      <TextInput onSubmit={handleSubmit} />
      {data && <Dropdown onChange={setOptions} />}
      {response.length > 0 && <Response data={response} selectedOptions={options} />}
    </div>
  );
}

export default App;
