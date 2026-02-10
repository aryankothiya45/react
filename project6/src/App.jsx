import { useState } from 'react'
import './App.css'
import { sculptureList } from './data.jsx'

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index +1);
  }

  let sculpture = sculptureList[index];

  return (
    <>

      {index >= sculptureList.length ? (
        <h1>End of the list</h1>
      ) : (
        <>
          <button onClick={handleClick}>Next Sculpture</button>
          <h1>{sculpture.name}</h1>
          <h2>{sculpture.artist}</h2>
          <h3>({index+1} of {sculptureList.length})</h3>
          <img src={sculpture.url} alt={sculpture.alt} />
          <p>{sculpture.description}</p>
        </>
      )}
    
    </>
  );
}

export default App
