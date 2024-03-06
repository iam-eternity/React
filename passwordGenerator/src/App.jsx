import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [ length, setLength ] = useState(8)
  const [ upperCaseAllowed, setUpperCaseAllowed ] = useState(false)
  const [ lowerCaseAllowed, setLowerCaseAllowed ] = useState(false)
  const [ charAllowed, setCharAllowed ] = useState(false)
  const [ password, setPassword ] = useState("")
  
  // useRef Hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "0123456789"
    if (upperCaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (lowerCaseAllowed) str += "abcdefghijklmnopqrstuvwxyz"
    if (charAllowed) str+= "!@#$%^&*()_+-={}[]<>?`~/|"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)

    }

    setPassword(password)
  }, [length, charAllowed, lowerCaseAllowed, upperCaseAllowed, setPassword])

  const copyPasswwordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, lowerCaseAllowed, upperCaseAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <h1
      className='text-4xl text-center font-bold'
    >Password Generator</h1>
<div className="w-full max-w-2xl max-h-4xl mx-auto shadow-md rounded-lg text-orange-500 bg-gray-800 px-4 py-4 my-8 ">
  <div className="flex shadow rounded-lg overflow-hidden my-4">
    <input type="text"
    value={password}
    className='outline-none w-full py-3 px-3  text-2xl'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button
    onClick={copyPasswwordToClipboard}
    className='
    outline-none bg-blue-700 text-white font-bold text-lg px-3 py-0.5 shrink-0'>copy</button>
  </div>
  <div className="flex text-sm gap-x-5 text-xl font-bold">
    <div className="flex items-center gap-x-3">
      <input type="range" 
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      />
      <label >Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-3">
    <input type="checkbox"
      defaultChecked={lowerCaseAllowed}
      id='numberAllowed'
      onChange={() => {
        setLowerCaseAllowed((prev) => !prev)
      }}
    />
    <label htmlFor='NumberInput'>Lower Case Alphabets</label>
    </div>
    <div className="flex items-center gap-x-3">
    <input type="checkbox"
      defaultChecked={upperCaseAllowed}
      id='upperCaseAllowed'
      onChange={() => {
        setUpperCaseAllowed((prev) => !prev)
      }}
    />
    <label htmlFor='Lower Case Input'>Upper Case Alphabets</label>
    </div>
    <div className="flex items-center gap-x-3">
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
