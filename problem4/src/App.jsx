import { useState } from 'react'
import './App.css'
import { getImageUrl } from './util.jsx'
import {people} from './data.jsx'

export default function App() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}: </b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return <ul>{listItems}</ul>;
}


