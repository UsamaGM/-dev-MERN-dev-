import { useState } from 'react'
import Header from './component/Header'
import Courses from './component/Courses'
import ProgressBar from './component/ProgressBar'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Courses/>
      <ProgressBar />
      <Login />
    </>
  )
}

export default App
