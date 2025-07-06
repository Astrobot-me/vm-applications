import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numeric, setNumeric] = useState(false)
  const [chars, setChars] = useState(false)

  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numeric) str += "1234567890";
    if (chars) str += "!@#$%^&*(){}[];<>?/";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * (str.length + 1))
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, numeric, chars, setPassword])

  const copyToClipboard = useCallback(() => {
    console.log(password);
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numeric, chars, passwordGen])

  return (
    <>
      <div className='w-full h-screen bg-slate-900 flex flex-col items-center justify-center '>
        <h1 className='text-2xl text-center text-white font-semibold mt-2'>Password Generator</h1>
        <div className='bg-slate-600 flex flex-col justify-center items-center gap-6 p-4 py-10 mt-5 rounded-md shadow-xl w-[40%]'>
          <div className='flex justify-center h-10'>

            <input type="text" name="" id="" className='w-[300px] rounded-br-none rounded-tr-none rounded-lg px-3' value={password} readOnly placeholder='password' ref={passwordRef} />

            <button className=' px-4 rounded-bl-none rounded-tl-none rounded-lg text-white  font-semibold bg-indigo-600  hover:duration-300 h-10' onClick={copyToClipboard}>Copy</button>
          </div>

          <div className='flex  gap-6 w-[100%] justify-center'>
            <div className='flex gap-1'>
              <input type="range" name="" id="" min={0} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} />
              <label htmlFor="" className='text-white'>Length : {length}</label>
            </div>

            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" onChange={() => {
                setNumeric((prev) => {
                  // console.log(!prev);
                  return !prev
                })

              }} />
              <label htmlFor="" className='text-white'>Number</label>
            </div>

            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" onChange={() => {
                setChars((prev) => {
                  // console.log(!prev);  
                  return !prev
                })
              }} />
              <label htmlFor="" className='text-white'>Special Chars</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
