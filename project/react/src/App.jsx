import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/user-profile';
import Greet from './components/greet';

function App() {
  const onClick = () => {
    console.log("button clicked")
  }
let x = 10;
  return (
    <main>
      <h1>Hello World</h1>
      <p>{x}</p>
      <li>JSX: js extended syntax for xml</li>
      <button onClick={onClick}>Click ME</button>
    <UserProfile />
    <UserProfile />
    {UserProfile()}
    <Greet />
    </main>
  );

}

export default App
