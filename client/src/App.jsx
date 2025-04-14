import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Courses/>
      <Card/>
    </>
  )
}

export default App
