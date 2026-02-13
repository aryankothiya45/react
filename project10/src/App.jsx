import { useState } from 'react';
import Contact from './contact';  
import './App.css'

const contacts = [
  {
    id : 0,
    name: 'John Doe',
    email: 'johnbanegadon@gmail.com'
  },
  {
    id : 1,
    name: 'steve harry',
    email: 'steve.harry@gmail.com'
  },
  {
    id : 2,
    name: 'michael scott',
    email: 'michel@gmail.com'
  },
  { 
    id : 3,
    name: 'jim halpert',
    email: 'jim.halpert@gmail.com'
  }
];

function App() {
  const [reverse, setReverse] = useState(false);

  const displayContacts = reverse ? [...contacts].reverse() : contacts;

  const handleToggle = ( {target : {checked}}) => {
    setReverse(checked);
  };

  return (
    <>

      <ul>
        {displayContacts.map(({ id , ...contact}) => (
          <li key={id}>
            <Contact contact={contact} />
          </li>
        )
      )}
      </ul>
      
      <label>
        <input type="checkbox" checked={reverse} onChange={handleToggle} />Reverse contacts
      </label>
    </>
  );
}
export default App
