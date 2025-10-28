import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Redux/counterAction'

function App() {
  const count=useSelector((state)=>state.count)
const dispatch=useDispatch()
  return (
    <>
    <h1>redux (this vanilla)</h1>
    <h2>{count}</h2>

    <button onClick={()=>dispatch(increment())} >increment</button>
    <button onClick={()=>dispatch(decrement())} >decrement</button>
    <button onClick={()=>dispatch(reset())} >reset</button>


    </>
  )
}

export default App
