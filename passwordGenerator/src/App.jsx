import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ length, setLength ] = useState(8)
  const [ numberAllowed, setNumberAllowed ] = useState(false)
  const [ charAllowed, setCharAllowed ] = useState(false)
  const [ password, setPassword ] = useState("")
  
  const passwordGenerator = useCallback(() => {
    let password = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str+= "!@#$%^&*()_+-={}[]<>?`~/|"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)

    }

    setPassword(password)
  }, [length, charAllowed, numberAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <h1
      className='text-4xl text-center'
    >Password Generator</h1>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500 bg-gray-800 px-4 py-4 my-8 ">
  <div className="flex shadow rounded-lg overflow-hidden my-4">
    <input type="text"
    value={password}
    className='outline-none w-full py-3 px-3'
    placeholder='password'
    readOnly
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input type="range" 
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      />
      <label >Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input type="checkbox"
      defaultChecked={numberAllowed}
      id='numberAllowed'
      onChange={() => {
        setNumberAllowed((prev) => !prev)
      }}
    />
    <label htmlFor='NumberInput'>Number</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input type="checkbox"
      defaultChecked={charAllowed}
      id='charAllowed'
      onChange={() => {
        setCharAllowed((prev) => !prev)
      }}
    />
    <label htmlFor='characterInput' >Characters</label>
    </div>
  </div>
</div>
    </>
  )
}

export default App