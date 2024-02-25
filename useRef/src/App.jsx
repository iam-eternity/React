// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations, and Transitions
//                     3. Managing Timers and Intervals


import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

  const ref = useRef(0)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  useEffect(() => {
    console.log('Component Rendered');
  })
  function handleClick1 () {
    // ref.current = ref.current + 1
    // console.log(ref.current);
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = "aqua"
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""
  }
  function handleClick2 () {
    // ref.current = ref.current + 1
    // console.log(ref.current);
    inputRef2.current.focus()
    inputRef2.current.style.backgroundColor = "aqua"
    inputRef1.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""
  }
  function handleClick3 () {
    // ref.current = ref.current + 1
    // console.log(ref.current);
    inputRef3.current.focus()
    inputRef3.current.style.backgroundColor = "aqua"
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = ""
  }
  return (
    <>
    <button onClick={handleClick1}>Click me 1</button> <br />
    <input ref={inputRef1} type="text" /> <br />
    <button onClick={handleClick2}>Click me 2</button> <br />
    <input ref={inputRef2} type="text" />
    <br />
    <button onClick={handleClick3}>Click me 3</button> <br />
    <input ref={inputRef3} type="text" />
    </>
  )
}

export default App
