import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email:'johnthedon@gmail.com'
  });

  function handleFirstNameChange(event) {
    setPerson({
      ...person,
      firstName: event.target.value
    });
  }

  function handleLastNameChange(event) {
    setPerson({
      ...person,
      lastName: event.target.value
    });
  }

  function handleEmailChange(event) {
    setPerson({
      ...person,
      email: event.target.value
    });
  }


  return (
    <>
      <label>
        First Name:
        <input type="text" value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={person.email} onChange={handleEmailChange} />
      </label>

      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <p>Email: {person.email}</p>

    </>
  );
}

export default App
