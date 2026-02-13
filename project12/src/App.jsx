import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('hello');
 
useEffect(() => {
  console.log('render');
  
  return () => {
    console.log('clean up');
  }
}, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <div>
        <h1>{resourceType}</h1>
      </div>
    </>
  );
}

export default App
