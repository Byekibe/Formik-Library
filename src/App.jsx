import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignupForm from './components/MyFormik'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
        <SignupForm />
      </>
    </div>
  )
}

export default App
