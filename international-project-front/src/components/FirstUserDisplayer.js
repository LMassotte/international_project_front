import React, { useState, useEffect } from 'react'

export default function FirstUserDisplayer() {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/api/users/first')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setUserName(data.firstUser.username))
        .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="App">
          <header className="App-header">
            <p>User in db: {userName || 'Loading...'}</p>
          </header>
        </div>
      );
}
 