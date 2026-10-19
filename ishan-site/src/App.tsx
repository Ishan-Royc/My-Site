import { useState } from 'react'
import './App.css'
import TopBar from './TopBar'

function App() {
  const [act, setAct] = useState(0);
  return (
    <>
      <TopBar active = {act}></TopBar>
      <h1>hi</h1>
    </>
  );
}

export default App;
