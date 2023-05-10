import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCheck = (event, itemId) => {
    const isChecked = event.target.checked;
    setData((prevData) =>
      prevData.map((prevItem) => {
        if (prevItem.id === itemId) {
          return { ...prevItem, completed: isChecked };
        }
        return prevItem;
      })
    );
  };

  return (
    <div>
      {data.map((item) => (
        <div style={{ border: '2px black solid', margin: '4px' }} key={item.id}>
          <h2>Title : {item.title} </h2>
          {item.completed ? (
            <span>
              <input
                type="checkbox"
                checked={true}
                onChange={(event) => handleCheck(event, item.id)}
              />
              <p style={{ color: 'green' }}>Status : Completed</p>
            </span>
          ) : (
            <p style={{ color: 'red' }}>
              Status :
              <input
                type="checkbox"
                checked={false}
                onChange={(event) => handleCheck(event, item.id)}
              />
              Not completed
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
