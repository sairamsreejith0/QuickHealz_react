// App.js
import React, { useState, useEffect } from 'react';

import AppRoutes from './routes';

function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Fetch data from Django API endpoint using Axios
  //   axios
  //     .get('http://127.0.0.1:8000/my_api_view/')
  //     .then(response => {
  //       // Handle successful response
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       // Handle error
  //       console.error('Error:', error);
  //     });
  // }, []);

  return (
    <AppRoutes/>
  );
}

export default App;
