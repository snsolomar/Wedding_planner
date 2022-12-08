import { useState } from 'react'
import NavBar from './Nav'
import Display from './display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">Hello
      <NavBar />
      <Display />
    </div>
  )
}

export default App
