import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import SignInPage from './pages/SignIn';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Social Media App</h1>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </>
  )
}

export default App
