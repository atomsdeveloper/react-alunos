import { useState, useEffect } from 'react';

// Pages
import Login from './pages/Login';

function App() {
  const [data, setData] = useState(0);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });

    return () => {};
  }, []);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
