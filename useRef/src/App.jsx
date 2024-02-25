// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations, and Transitions
//                     3. Managing Timers and Intervals


import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

  const ref = useRef(0)
  const inputRef = useRef(null)
  useEffect(() => {
    console.log('Component Rendered');
  })
  function handleClick () {
    // ref.current = ref.current + 1
    // console.log(ref.current);
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "aqua"
  }
  return (
    <>
    <button onClick={handleClick}>Click me</button> <br />
    <input ref={inputRef} type="text" />
    </>
  )
}

export default App
