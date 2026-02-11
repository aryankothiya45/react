import { useState } from 'react'
import './App.css'

let nextId = 0;

function App() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Artist List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter artist name"
      />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name }]);
          setName('');
        }}
      >
        Add Artist
      </button>

      <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            {artist.name}
            <button
              onClick={() => {
                const updatedArtists = artists.filter((_, i) => i !== index);
                setArtists(updatedArtists);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
