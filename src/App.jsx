import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(0);

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

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <>
      <div className="card">
        <h1>{data ? JSON.stringify(data) : 'Carregando...'}</h1>
      </div>
    </>
  );
}

export default App;
