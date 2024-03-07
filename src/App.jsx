import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Component/Form'
import Get from './Component/Get'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
      {/* <Get/> */}
    </>
  )
}

export default App
