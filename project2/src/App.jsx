import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getImageUrl from './utils'

export function App({ person,size}) {
  return(
    <img
      className="app"
      src={getImageUrl(person,size)}
      alt={person.name}
      width = {size}
    />
  );
}

export default function Profile() {
  return(
    <div>
      <App
      size={100}
      person = {{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
      />
      <br />

      <App
      size={75}
      person = {{name: 'Aklilu', imageId: 'OKS67lh'}}
      />
      <br />
      
      <App
      size={50}
      person = {{name: 'Lin Lry', imageId: '1bX5QH6'}}
      />
    </div>
  );
}

