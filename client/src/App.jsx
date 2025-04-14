import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Courses/>
    </>
  )
}

export default App
