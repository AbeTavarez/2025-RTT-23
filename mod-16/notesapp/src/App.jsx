import { useState, useEffect } from 'react'
import {backendClient} from './clients/backendClient'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await backendClient('/notes');
        const notes = res.data;
        console.log(notes)
      } catch(e) {
        console.error(e)
      }
    }
    fetchNotes();
  }, []);

  return (
    <>
      <h1>Notes App</h1>
    </>
  )
}

export default App
