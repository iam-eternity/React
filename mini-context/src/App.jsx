import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/ContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>I am Eternity-</h1>
      </UserContextProvider>
    </>
  )
}

export default App
